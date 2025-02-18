import { strictEqual } from 'node:assert'
import { describe, test } from 'node:test'

import { pipe } from 'fp-ts/lib/function.js'

import { gedcomTreeIso } from '#lib/gedcomTreeIso'
import { eachSampleText } from '#tests/lib'

describe('raw > tree > raw', () => {
	eachSampleText(({ fileName, text, cleanText }) => {
		test(`tokenize ${fileName}`, () => {
			strictEqual(pipe(text, gedcomTreeIso.to, gedcomTreeIso.from), cleanText)
		})
	})
})
