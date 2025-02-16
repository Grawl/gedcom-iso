import type { ExtraTag } from './common'

export type Tag<
	Type,
	FormalName = Type,
	ChildTag = never,
	Data extends Record<string, unknown> = Record<string, unknown>,
> = {
	type: Type
	data: {
		formal_name: FormalName
	} & Data
	children: Array<ChildTag | ExtraTag>
}

export type ValueTag<
	Type,
	FormalName = Type,
	Value = string,
	ChildTag = never,
	Data extends Record<string, unknown> = Record<string, unknown>,
> =
	| Tag<Type, FormalName, ChildTag, Data>
	| (Tag<Type, FormalName, ChildTag, Data> & { value: Value })

export type PointerTag<Type, FormalName = Type, ChildTag = never> = Tag<
	Type,
	FormalName,
	ChildTag,
	{ pointer: string }
>

export type IdTag<Type, FormalName = Type, ChildTag = never> = Tag<
	Type,
	FormalName,
	ChildTag,
	{ xref_id: string }
>
