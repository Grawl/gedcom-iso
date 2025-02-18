import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'

import { gedcomTreeIso } from '#lib/gedcomTreeIso'
import { removeSpacesFromEndOfLines } from '#lib/utils'

// https://github.com/findmypast/gedcom-samples
export const samplesDirectory = resolve(import.meta.dirname, '../samples')

export const generatedSnapshotFileExtension = '.generated.test.ts'

export const testSample = async ({ filename }: { filename: string }) => {
	const fileName = filename.split('/').at(-1)?.replace(generatedSnapshotFileExtension, '.ged')
	if (fileName === undefined) throw Error('File name error')
	const fileBuffer = readFileSync(`${samplesDirectory}/${fileName}`)
	const text = fileBuffer.toString()
	await test(`snapshot ${fileName}`, t => {
		t.assert.snapshot(gedcomTreeIso.to(text))
	})
}

export const eachSample = (callback: (fileName: string) => void) => {
	readdirSync(samplesDirectory).forEach(fileName => {
		callback(fileName)
	})
}

export const eachSampleText = (
	callback: (parameters: { fileName: string; text: string; cleanText: string }) => void,
) => {
	eachSample(fileName => {
		const fileBuffer = readFileSync(`${samplesDirectory}/${fileName}`)
		const text = fileBuffer.toString()
		const cleanText = removeSpacesFromEndOfLines(text)
		callback({ fileName, text, cleanText })
	})
}
