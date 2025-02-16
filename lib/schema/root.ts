import type { Address, Name } from './common.ts'
import { type Family } from './family.ts'
import type { Head } from './head.ts'
import { type Individual } from './individual.ts'
import type { IdTag, Tag } from './tags.ts'

export type Submitter = IdTag<'SUBM', 'SUBMITTER', Name | Address>

export type Trailer = Tag<'TRLR', 'TRAILER'>

export type RootChild = Head | Submitter | Individual | Family | Trailer

export type RootTag = {
	type: 'root'
	children: RootChild[]
}
