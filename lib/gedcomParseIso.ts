import { parse } from 'gedcom-latest'
import type { Line } from 'gedcom-latest/dist/lib/tokenize.d.ts'
import { Iso } from 'monocle-ts'
import { z } from 'zod'

import { gedcomLineIso } from './gedcomLineIso.ts'
import type { RootTag } from './schema/root.ts'
import { removeSpacesFromEndOfLines } from './utils.ts'

const baseTagSchema = z
	.object({
		type: z.string(),
		value: z.string().optional(),
		data: z
			.object({
				formal_name: z.string().optional(),
				xref_id: z.string().optional(),
				pointer: z.string().optional(),
				custom_tag: z.boolean().optional(),
			})
			.strict(),
	})
	.strict()

type Tag = z.infer<typeof baseTagSchema> & {
	children: Tag[]
}

const tagSchema: z.ZodType<Tag> = baseTagSchema
	.extend({
		children: z.lazy(() => tagSchema.array()),
	})
	.strict()

const splitLineToContinued = (line: Line): Line[] => {
	const { level, value, ...restLine } = line
	if (value === undefined || !value.includes('\n')) return [line]
	const [first, ...rest] = value.split('\n')
	return [
		{
			level,
			value: first,
			...restLine,
		},
		...rest.map(
			(part): Line => ({
				level: level + 1,
				tag: 'CONT',
				value: part,
			}),
		),
	]
}

const tagToLine = (
	{ type, value, data: { xref_id, pointer }, children }: Tag,
	level = 0,
): Line[] => [
	...splitLineToContinued({ level: level, tag: type as Line['tag'], xref_id, pointer, value }),
	...children.flatMap(child => tagToLine(child, level + 1)),
]

const stringToParsed = (string: string): RootTag =>
	parse(removeSpacesFromEndOfLines(string).trim()) as RootTag

const parsedToString = ({ children }: RootTag) =>
	gedcomLineIso.from(
		children.flatMap(unistNode => {
			const parsed = tagSchema.safeParse(unistNode)
			if (parsed.error) throw parsed.error
			const { type, value, data, children } = parsed.data
			return tagToLine({ type, value, data, children })
		}),
	)

export const gedcomParseIso = new Iso<string, RootTag>(stringToParsed, parsedToString)
