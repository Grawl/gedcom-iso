import { strictEqual } from 'node:assert'
import { describe, test } from 'node:test'

import { pipe } from 'fp-ts/lib/function.js'

import { gedcomCompactIso } from '#lib/gedcomCompactIso'
import { eachSampleText } from '#tests/lib'

describe('text > compact > text', () => {
	eachSampleText(({ fileName, text, cleanText }) => {
		test(`compact ${fileName}`, () => {
			strictEqual(pipe(text, gedcomCompactIso.to, gedcomCompactIso.from), cleanText)
		})
	})
})
