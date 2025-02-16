import { tokenize } from 'gedcom-latest'
import type { Line } from 'gedcom-latest/dist/lib/tokenize.d.ts'
import { Iso } from 'monocle-ts'

import { removeSpacesFromEndOfLines } from './utils.ts'

const stringToLines = (gedcom: string): Line[] =>
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
		.filter(item => item !== null)

const linesToString = (lines: Line[]): string =>
	lines
		/*
		https://gedcom.io/specifications/ged551.pdf
		level + delim + [optional_xref_ID] + tag + [optional_line_value] + terminator
		*/
		.map(({ level, pointer, tag, value, xref_id }) =>
			[level, xref_id, tag, pointer, value].filter(item => item !== undefined).join(' '),
		)
		.join('\n')

export const gedcomLineIso = new Iso<string, Line[]>(stringToLines, linesToString)
