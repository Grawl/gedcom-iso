import type { Tag, ValueTag } from './tags.ts'

export type RecordIdNumber = ValueTag<'RIN', 'REC_ID_NUMBER'>

export type CustomTag = {
	type: string
	data: {
		custom_tag: true
	}
	value: string
	children: []
}

export type ExtraTag = CustomTag | RecordIdNumber

export type Name = ValueTag<'NAME'>

export type City = ValueTag<'CITY'>

export type PostalCode = ValueTag<'POST', 'POSTAL_CODE'>

export type Country = ValueTag<'CTRY', 'COUNTRY'>

export type Address =
	| ValueTag<'ADDR', 'ADDRESS'>
	| Tag<'ADDR', 'ADDRESS', City | PostalCode | Country>

export type Phone = ValueTag<'PHON', 'PHONE'>

export type GedFile = ValueTag<'FILE'>

export type WWW = ValueTag<'WWW', 'WEB'>

export type Language = ValueTag<'LANG', 'LANGUAGE'>

export type Version = ValueTag<'VERS', 'VERSION'>

export type Format = ValueTag<'FORM', 'FORMAT'>

export type GedDate = ValueTag<'DATE'>

export type GedTime = ValueTag<'TIME'>

export type GedDateTime = ValueTag<'DATE', 'DATE', string, GedTime>

export type Change = Tag<'CHAN', 'CHANGE', GedDate | GedDateTime>

export type GedObject = Tag<'OBJE', 'OBJECT', Format | GedFile>

export type Reference = ValueTag<'REFN', 'REFERENCE'>

export type Corporate = ValueTag<'CORP', 'CORPORATE', string, Address | Phone>

export type GedType = ValueTag<'TYPE'>

export type GedEvent = ValueTag<'EVEN', 'EVENT', string, GedType>

export type Place = ValueTag<'PLAC', 'PLACE'>
