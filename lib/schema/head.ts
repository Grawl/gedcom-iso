import type {
	Corporate,
	Format,
	GedDate,
	GedDateTime,
	GedFile,
	Language,
	Name,
	Version,
	WWW,
} from './common.ts'
import type { IdTag, PointerTag, Tag, ValueTag } from './tags.ts'

export type Source = ValueTag<'SOUR', 'SOURCE', string, WWW | Version | Name | Corporate>

export type Destination = ValueTag<'DEST', 'DESTINATION'>

export type Gedcom = Tag<'GEDC', 'GEDCOM', Version | Format>

export type SubmitterPointer = PointerTag<'SUBM', 'SUBMITTER'> | IdTag<'SUBM', 'SUBMITTER'>

export type Submission = ValueTag<'SUBN', 'SUBMISSION'>

export type Character = ValueTag<'CHAR', 'CHARACTER', 'UTF-8' | 'ANSI'>

export type Copyright = ValueTag<'COPR', 'COPYRIGHT'>

export type Head = Tag<
	'HEAD',
	'HEADER',
	| Source
	| GedFile
	| GedDate
	| GedDateTime
	| Destination
	| Gedcom
	| Language
	| SubmitterPointer
	| Submission
	| Character
	| Copyright
>
