import type { Tree } from '#lib/schema/root'

import { part1 } from './1'
import { part2 } from './2'
import { part3 } from './3'
import { part4 } from './4'
import { part5 } from './5'
import { part6 } from './6'
import { part7 } from './7'
import { part8 } from './8'
import { part9 } from './9'

const GameOfThrones: Tree = {
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
