import { readFileSync } from 'node:fs'
import { test } from 'node:test'

import { gedcomParseIso } from '#lib/gedcomParseIso'

// https://github.com/findmypast/gedcom-samples
export const samplesDirectory = './samples/'

export const generatedSnapshotFileExtension = '.generated.test.ts'

export const testSample = async ({ filename }: { filename: string }) => {
	const fileName = filename.split('/').at(-1)?.replace(generatedSnapshotFileExtension, '.ged')
	if (fileName === undefined) throw Error('File name error')
	const fileBuffer = readFileSync(`${samplesDirectory}/${fileName}`)
	const text = fileBuffer.toString()
	await test(`snapshot ${fileName}`, t => {
		t.assert.snapshot(gedcomParseIso.to(text))
	})
}
