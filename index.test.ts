import { readFileSync } from 'fs'
import { readdirSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { thereAndBack, removeSpacesFromEndOfLines } from './index.js'

// https://github.com/findmypast/gedcom-samples
const folder = './samples/'

describe('thereAndBack', () => {
	readdirSync(folder).forEach(sample => {
		test(`thereAndBack ${sample}`, () => {
			const fileBuffer = readFileSync(`${folder}/${sample}`)
			const text = fileBuffer.toString()
			expect(thereAndBack(text)).toBe(removeSpacesFromEndOfLines(text))
		})
	})
})
