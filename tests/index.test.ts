import { strictEqual } from 'node:assert'
import { readdirSync, readFileSync } from 'node:fs'
import { describe, test } from 'node:test'

import { pipe } from 'fp-ts/lib/function.js'

import { gedcomLineIso } from '#lib/gedcomLineIso'
import { gedcomParseIso } from '#lib/gedcomParseIso'
import { removeSpacesFromEndOfLines } from '#lib/utils'
import { samplesDirectory } from '#tests/lib'

describe('there and back', () => {
	readdirSync(samplesDirectory).forEach(fileName => {
		const fileBuffer = readFileSync(`${samplesDirectory}/${fileName}`)
		const text = fileBuffer.toString()
		const cleanText = removeSpacesFromEndOfLines(text)
		test(`tokenize ${fileName}`, () => {
			strictEqual(pipe(text, gedcomLineIso.to, gedcomLineIso.from), cleanText)
		})
		test(`parse ${fileName}`, () => {
			strictEqual(pipe(text, gedcomParseIso.to, gedcomParseIso.from), cleanText)
		})
	})
})
