import { readdirSync } from 'node:fs'

import { pipe } from 'fp-ts/function'
import { readFileSync } from 'fs'
import { describe, expect, test } from 'vitest'

import { gedcomLineIso } from './lib/gedcomLineIso'
import { gedcomParseIso } from './lib/gedcomParseIso'

import { removeSpacesFromEndOfLines } from '@/lib/utils'

// https://github.com/findmypast/gedcom-samples
const folder = './samples/'

describe('there and back', () => {
	readdirSync(folder).forEach(sample => {
		const fileBuffer = readFileSync(`${folder}/${sample}`)
		const text = fileBuffer.toString()
		const cleanText = removeSpacesFromEndOfLines(text)
		test(`tokenize ${sample}`, () => {
			expect(pipe(text, gedcomLineIso.to, gedcomLineIso.from)).toBe(cleanText)
		})
		test(`parse ${sample}`, () => {
			expect(pipe(text, gedcomParseIso.to, gedcomParseIso.from)).toBe(cleanText)
		})
	})
})
