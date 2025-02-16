import { strictEqual } from 'node:assert'
import { readdirSync, readFileSync } from 'node:fs'
import { describe, test } from 'node:test'

import { pipe } from 'fp-ts/lib/function.js'

import { gedcomLineIso } from '#lib/gedcomLineIso'
import { gedcomParseIso } from '#lib/gedcomParseIso'
import { removeSpacesFromEndOfLines } from '#lib/utils'

// https://github.com/findmypast/gedcom-samples
const folder = './samples/'

describe('there and back', () => {
	readdirSync(folder).forEach(fileName => {
		const fileBuffer = readFileSync(`${folder}/${fileName}`)
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

// HELP too large snapshots :( 12 MB
describe('snap', () => {
	readdirSync(folder).forEach(fileName => {
		const fileBuffer = readFileSync(`${folder}/${fileName}`)
		const text = fileBuffer.toString()
		test(`snapshot ${fileName}`, t => {
			t.assert.snapshot(gedcomParseIso.to(text))
		})
	})
})
