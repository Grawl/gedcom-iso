import { strictEqual } from 'node:assert'
import { describe, test } from 'node:test'

import { pipe } from 'fp-ts/lib/function.js'

import { gedcomLineIso } from '#lib/gedcomLineIso'
import { eachSampleText } from '#tests/lib'

describe('raw > lines > raw', () => {
	eachSampleText(({ fileName, text, cleanText }) => {
		test(`tokenize ${fileName}`, () => {
			strictEqual(pipe(text, gedcomLineIso.to, gedcomLineIso.from), cleanText)
		})
	})
})
