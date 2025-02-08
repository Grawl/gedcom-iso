import { strictEqual } from 'node:assert'
import { readdirSync, readFileSync } from 'node:fs'
import { describe, test } from 'node:test'

import { pipe } from 'fp-ts/lib/function.js'

import { gedcomLineIso } from './lib/gedcomLineIso.ts'
import { gedcomParseIso } from './lib/gedcomParseIso.ts'
import { removeSpacesFromEndOfLines } from './lib/utils.ts'

// https://github.com/findmypast/gedcom-samples
const folder = './samples/'

describe('there and back', () => {
	readdirSync(folder).forEach(sample => {
		const fileBuffer = readFileSync(`${folder}/${sample}`)
		const text = fileBuffer.toString()
		const cleanText = removeSpacesFromEndOfLines(text)
		test(`tokenize ${sample}`, () => {
			strictEqual(pipe(text, gedcomLineIso.to, gedcomLineIso.from), cleanText)
		})
		test(`parse ${sample}`, () => {
			strictEqual(pipe(text, gedcomParseIso.to, gedcomParseIso.from), cleanText)
		})
	})
})
