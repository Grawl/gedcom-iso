import { describe } from 'node:test'

import { testSample } from '#tests/lib'

describe('snap', () => {
	testSample(import.meta)
})
