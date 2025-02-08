import { parse } from 'gedcom-latest'
import type { Line } from 'gedcom-latest/dist/lib/tokenize.d.ts'
import { Iso } from 'monocle-ts'
import type { Parent } from 'unist'
import { z } from 'zod'

import { gedcomLineIso } from './gedcomLineIso.ts'
import { removeSpacesFromEndOfLines } from './utils.ts'

const baseNodeSchema = z
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

type Node = z.infer<typeof baseNodeSchema> & {
	children: Node[]
}

const nodeSchema: z.ZodType<Node> = baseNodeSchema
	.extend({
		children: z.lazy(() => nodeSchema.array()),
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

const itemToLine = (
	{ type, value, data: { xref_id, pointer }, children }: Node,
	level = 0,
): Line[] => [
	...splitLineToContinued({ level: level, tag: type as Line['tag'], xref_id, pointer, value }),
	...children.flatMap(child => itemToLine(child, level + 1)),
]

export const gedcomParseIso = new Iso<string, Parent>(
	gedcom => parse(removeSpacesFromEndOfLines(gedcom).trim()),
	parsed => {
		const lines: Line[] = parsed.children.flatMap(node => {
			const parsed = nodeSchema.safeParse(node)
			if (parsed.error) throw parsed.error
			const { type, value, data, children } = parsed.data
			return itemToLine({ type, value, data, children })
		})
		return gedcomLineIso.from(lines)
	},
)
