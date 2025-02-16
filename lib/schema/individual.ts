import {
	type Change,
	type GedDate,
	type GedEvent,
	type GedObject,
	type GedType,
	type Place,
} from './common.js'
import type { IdTag, PointerTag, Tag, ValueTag } from './tags.ts'

export type NamePrefix = ValueTag<'NPFX', 'NAME_PREFIX'>

export type NameSuffix = ValueTag<'NSFX', 'NAME_SUFFIX'>

export type GivenName = ValueTag<'GIVN', 'GIVEN_NAME'>

export type Surname = ValueTag<'SURN', 'SURNAME'>

export type Name = ValueTag<'NAME', 'NAME', string, NamePrefix | NameSuffix | GivenName | Surname>

export type Alias = ValueTag<'ALIA', 'ALIAS'>

export type Sex = ValueTag<'SEX', 'SEX', 'M' | 'W' | 'F' | 'U'>

export type FamilySpouse = PointerTag<'FAMS', 'FAMILY_SPOUSE'>

export type FamilyChild = PointerTag<'FAMC', 'FAMILY_CHILD'>

export type Birth = Tag<'BIRT', 'BIRTH', GedDate | Place>

export type Cause = ValueTag<'CAUS', 'CAUSE'>

export type Death = Tag<'DEAT', 'DEATH', GedDate | Cause | GedType | Place>

export type Burial = Tag<'BURI', 'BURIAL', Place>

export type Individual = IdTag<
	'INDI',
	'INDIVIDUAL',
	| Name
	| Alias
	| Sex
	| FamilySpouse
	| FamilyChild
	| Change
	| GedObject
	| GedEvent
	| Birth
	| Death
	| Burial
>
