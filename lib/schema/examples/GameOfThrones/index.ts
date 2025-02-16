import type { RootTag } from '../../root.ts'
import { part1 } from './1.ts'
import { part2 } from './2.ts'
import { part3 } from './3.ts'
import { part4 } from './4.ts'
import { part5 } from './5.ts'
import { part6 } from './6.ts'
import { part7 } from './7.ts'
import { part8 } from './8.ts'
import { part9 } from './9.ts'

const GameOfThrones: RootTag = {
	type: 'root',
	children: [
		...part1,
		...part2,
		...part3,
		...part4,
		...part5,
		...part6,
		...part7,
		...part8,
		...part9,
	],
}
