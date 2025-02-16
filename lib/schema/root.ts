import type { Address, Name } from './common'
import { type Family } from './family'
import type { Head } from './head'
import { type Individual } from './individual'
import type { IdTag, Tag } from './tags'

export type Submitter = IdTag<'SUBM', 'SUBMITTER', Name | Address>

export type Trailer = Tag<'TRLR', 'TRAILER'>

export type RootChild = Head | Submitter | Individual | Family | Trailer

export type RootTag = {
	type: 'root'
	children: RootChild[]
}
