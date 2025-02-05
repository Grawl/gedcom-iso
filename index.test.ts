import { pipe } from 'fp-ts/function'
import { readFileSync } from 'fs'
import { readdirSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { removeSpacesFromEndOfLines, gedcomLineIso } from './index.js'

// https://github.com/findmypast/gedcom-samples
const folder = './samples/'

describe('there and back', () => {
	readdirSync(folder).forEach(sample => {
		test(`tokenize ${sample}`, () => {
			const fileBuffer = readFileSync(`${folder}/${sample}`)
			const text = fileBuffer.toString()
			expect(pipe(text, gedcomLineIso.to, gedcomLineIso.from)).toBe(
				removeSpacesFromEndOfLines(text),
			)
		})
	})
})
