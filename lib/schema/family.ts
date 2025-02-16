import type { Change, GedEvent, Reference } from './common.js'
import type { IdTag, PointerTag, Tag } from './tags.ts'

export type Husband = PointerTag<'HUSB', 'HUSBAND'>

export type Wife = PointerTag<'WIFE'>

export type Child = PointerTag<'CHIL', 'CHILD'>

export type Marriage = Tag<'MARR', 'MARRIAGE'>

export type Engagement = Tag<'ENGA', 'ENGAGEMENT'>

export type Family = IdTag<
	'FAM',
	'FAMILY',
	Husband | Wife | Child | Reference | Change | Marriage | Engagement | GedEvent
>
