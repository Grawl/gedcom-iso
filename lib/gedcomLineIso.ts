import { tokenize } from 'gedcom-latest'
import type { Line } from 'gedcom-latest/dist/lib/tokenize'
import { Iso } from 'monocle-ts'

import { removeSpacesFromEndOfLines } from '@/lib/utils'

export const gedcomLineIso = new Iso<string, Line[]>(
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
