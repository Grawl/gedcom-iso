import { readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { generatedSnapshotFileExtension, samplesDirectory } from '#tests/lib'

const code = `
import { describe } from 'node:test'

import { testSample } from '#tests/lib'

describe('snap', () => {
	testSample(import.meta)
})
`.trimStart()

readdirSync(samplesDirectory).forEach(fileName => {
	writeFileSync(
		join('tests', 'samples', fileName.replace('.ged', generatedSnapshotFileExtension)),
		code,
	)
})
