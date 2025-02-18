import { compact } from 'gedcom-latest'
import { Iso } from 'monocle-ts'
import type { Tag } from 'read-gedcom/dist/cjs/tag/Tag.d.ts'

import { gedcomTreeIso } from '#lib/gedcomTreeIso'
import type { TreeNode } from '#lib/schema/root'
import { eachSampleText } from '#tests/lib'

type TagName = `${Tag}`

type CompactNode = {
	type: TreeNode['type']
	// TODO describe using TagName concatenation using TreeNode children recursive
	// data: {
	// 	'NAME': 'Marge /Simpson/',
	// 	'NAME/GIVEN_NAME': 'Marge',
	// 	'NAME/SURNAME': 'Simpson',
	// 	'SEX': 'F',
	// 	'@FAMILY_CHILD': '@F0003@',
	// 	'@FAMILY_SPOUSE': '@F0000@',
	// 	'OBJECT/FORMAT': 'URL',
	// 	'OBJECT/FILE': 'http://en.wikipedia.org/wiki/Marge_Simpson',
	// 	'CHANGE/DATE': '11 FEB 2007',
	// 	'CHANGE/DATE/TIME': '15:13:45'
	// }
	data: {
		formal_name: string // TODO
		xref_id: string
	} & Record<TagName, string>
	value: undefined
	children: never[]
}

type Compact = {
	type: 'root'
	children: CompactNode[]
}

const rawToCompact = (input: string): Compact => {
	return compact(gedcomTreeIso.to(input), []) as Compact
}

const compactToRaw = (compact: Compact): string => {
	// TODO compact > tree
	// then lines > string
	console.dir({ compact }, { depth: Infinity })
	return ''
}

export const gedcomCompactIso = new Iso<string, Compact>(rawToCompact, compactToRaw)

eachSampleText(({ text }) => {
	console.dir(gedcomCompactIso.to(text), { depth: Infinity })
})
