import { tokenize } from 'gedcom-latest'
import type { Line } from 'gedcom-latest/dist/lib/tokenize.js'
import { Iso } from 'monocle-ts'
import { pipe } from 'fp-ts/function'

export const removeSpacesFromEndOfLines = (input: string): string =>
	input.replace(/\s*\n/gm, '\n').trim()

export const gedcomIso = new Iso<string, Line[]>(
	gedcom =>
		removeSpacesFromEndOfLines(gedcom)
			.trim()
			.split('\n')
			.map(item => {
				try {
					return tokenize(item)
				} catch (error) {
					console.error(error)
					return null
				}
			})
			.filter(item => item !== null),
	lines =>
		lines
			/*
			https://gedcom.io/specifications/ged551.pdf
			level + delim + [optional_xref_ID] + tag + [optional_line_value] + terminator
			*/
			.map(({ level, pointer, tag, value, xref_id }) =>
				[level, xref_id, tag, pointer, value].filter(item => item !== undefined).join(' '),
			)
			.join('\n'),
)

export const thereAndBack = (gedcom: string): string => pipe(gedcom, gedcomIso.to, gedcomIso.from)

export const foo = 'bar'
