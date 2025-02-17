import { type Change, type GedDate, type GedFile, type GedObject } from '#lib/schema/common'
import type { Family } from '#lib/schema/family'
import type {
	Character,
	Copyright,
	Destination,
	Gedcom,
	Head,
	Source,
	SubmitterPointer,
} from '#lib/schema/head'
import { type Individual } from '#lib/schema/individual'
import type { RootTag, Submitter } from '#lib/schema/root'

const source: Source = {
	type: 'SOUR',
	data: { formal_name: 'SOURCE' },
	value: 'GRAMPS',
	children: [
		{
			type: 'VERS',
			data: { formal_name: 'VERSION' },
			value: '2.2.6-1',
			children: [],
		},
		{
			type: 'NAME',
			data: { formal_name: 'NAME' },
			value: 'GRAMPS',
			children: [],
		},
	],
}

const destination: Destination = {
	type: 'DEST',
	data: { formal_name: 'DESTINATION' },
	value: 'GEDCOM 5.5',
	children: [],
}

const date: GedDate = {
	type: 'DATE',
	data: { formal_name: 'DATE' },
	value: '9 MAR 2007',
	children: [],
}

const character: Character = {
	type: 'CHAR',
	data: { formal_name: 'CHARACTER' },
	value: 'UTF-8',
	children: [],
}

const submitterPointer: SubmitterPointer = {
	type: 'SUBM',
	data: { formal_name: 'SUBMITTER', pointer: '@SUBM@' },
	children: [],
}

const file: GedFile = {
	type: 'FILE',
	data: { formal_name: 'FILE' },
	value: '/home/bodon/dok/gramps_data/Untitled_1.ged',
	children: [],
}

const copyright: Copyright = {
	type: 'COPR',
	data: { formal_name: 'COPYRIGHT' },
	value: 'Copyright (c) 2007 .',
	children: [],
}

const gedcom: Gedcom = {
	type: 'GEDC',
	data: { formal_name: 'GEDCOM' },
	children: [
		{
			type: 'VERS',
			data: { formal_name: 'VERSION' },
			value: '5.5',
			children: [],
		},
		{
			type: 'FORM',
			data: { formal_name: 'FORMAT' },
			value: 'LINEAGE-LINKED',
			children: [],
		},
	],
}

export const head: Head = {
	type: 'HEAD',
	data: { formal_name: 'HEADER' },
	children: [source, destination, date, character, submitterPointer, file, copyright, gedcom],
}

const submitter: Submitter = {
	type: 'SUBM',
	data: { formal_name: 'SUBMITTER', xref_id: '@SUBM@' },
	children: [
		{
			type: 'NAME',
			data: { formal_name: 'NAME' },
			value: 'Not Provided',
			children: [],
		},
		{
			type: 'ADDR',
			data: { formal_name: 'ADDRESS' },
			value: 'Not Provided\nNot Provided',
			children: [],
		},
	],
}

const change: Change = {
	type: 'CHAN',
	data: { formal_name: 'CHANGE' },
	children: [
		{
			type: 'DATE',
			data: { formal_name: 'DATE' },
			value: '11 FEB 2007',
			children: [
				{
					type: 'TIME',
					data: { formal_name: 'TIME' },
					value: '15:05:36',
					children: [],
				},
			],
		},
	],
}

const object: GedObject = {
	type: 'OBJE',
	data: { formal_name: 'OBJECT' },
	children: [
		{
			type: 'FORM',
			data: { formal_name: 'FORMAT' },
			value: 'URL',
			children: [],
		},
		{
			type: 'FILE',
			data: { formal_name: 'FILE' },
			value: 'http://en.wikipedia.org/wiki/Bart_Simpson',
			children: [],
		},
	],
}

export const Abraham: Individual = {
	type: 'INDI',
	data: { formal_name: 'INDIVIDUAL', xref_id: '@Abraham_Simpson@' },
	children: [
		{
			type: 'NAME',
			data: { formal_name: 'NAME' },
			value: 'Abraham /Simpson/',
			children: [
				{
					type: 'GIVN',
					data: { formal_name: 'GIVEN_NAME' },
					value: 'Abraham',
					children: [],
				},
				{
					type: 'SURN',
					data: { formal_name: 'SURNAME' },
					value: 'Simpson',
					children: [],
				},
			],
		},
		{
			type: 'SEX',
			data: { formal_name: 'SEX' },
			value: 'M',
			children: [],
		},
		{
			type: 'FAMS',
			data: { formal_name: 'FAMILY_SPOUSE', pointer: '@F0002@' },
			children: [],
		},
		change,
	],
}

export const Bart: Individual = {
	type: 'INDI',
	data: { formal_name: 'INDIVIDUAL', xref_id: '@Bart_Simpson@' },
	children: [
		{
			type: 'NAME',
			data: { formal_name: 'NAME' },
			value: 'Bart /Simpson/',
			children: [
				{
					type: 'GIVN',
					data: { formal_name: 'GIVEN_NAME' },
					value: 'Bart',
					children: [],
				},
				{
					type: 'SURN',
					data: { formal_name: 'SURNAME' },
					value: 'Simpson',
					children: [],
				},
			],
		},
		{
			type: 'SEX',
			data: { formal_name: 'SEX' },
			value: 'M',
			children: [],
		},
		{
			type: 'FAMC',
			data: { formal_name: 'FAMILY_CHILD', pointer: '@F0000@' },
			children: [],
		},
		object,
		{
			type: 'CHAN',
			data: { formal_name: 'CHANGE' },
			children: [
				{
					type: 'DATE',
					data: { formal_name: 'DATE' },
					value: '11 FEB 2007',
					children: [
						{
							type: 'TIME',
							data: { formal_name: 'TIME' },
							value: '15:04:14',
							children: [],
						},
					],
				},
			],
		},
	],
}

export const Jacqueline: Individual = {
	type: 'INDI',
	data: { formal_name: 'INDIVIDUAL', xref_id: '@Jacqueline_Bouvier@' },
	children: [
		{
			type: 'NAME',
			data: { formal_name: 'NAME' },
			value: 'Jacqueline /Bouvier/',
			children: [
				{
					type: 'GIVN',
					data: { formal_name: 'GIVEN_NAME' },
					value: 'Jacqueline',
					children: [],
				},
				{
					type: 'SURN',
					data: { formal_name: 'SURNAME' },
					value: 'Bouvier',
					children: [],
				},
			],
		},
		{
			type: 'SEX',
			data: { formal_name: 'SEX' },
			value: 'F',
			children: [],
		},
		{
			type: 'FAMS',
			data: { formal_name: 'FAMILY_SPOUSE', pointer: '@F0003@' },
			children: [],
		},
		{
			type: 'CHAN',
			data: { formal_name: 'CHANGE' },
			children: [
				{
					type: 'DATE',
					data: { formal_name: 'DATE' },
					value: '11 FEB 2007',
					children: [
						{
							type: 'TIME',
							data: { formal_name: 'TIME' },
							value: '15:13:45',
							children: [],
						},
					],
				},
			],
		},
	],
}

export const family1: Family = {
	type: 'FAM',
	data: { formal_name: 'FAMILY', xref_id: '@F0000@' },
	children: [
		{
			type: 'REFN',
			data: { formal_name: 'REFERENCE' },
			value: '0',
			children: [],
		},
		{
			type: 'HUSB',
			data: { formal_name: 'HUSBAND', pointer: '@Homer_Simpson@' },
			children: [],
		},
		{
			type: 'WIFE',
			data: { formal_name: 'WIFE', pointer: '@Marge_Simpson@' },
			children: [],
		},
		{
			type: 'CHIL',
			data: { formal_name: 'CHILD', pointer: '@Bart_Simpson@' },
			children: [],
		},
		{
			type: 'CHIL',
			data: { formal_name: 'CHILD', pointer: '@Maggie_Simpson@' },
			children: [],
		},
		{
			type: 'CHIL',
			data: { formal_name: 'CHILD', pointer: '@Lisa_Simpson@' },
			children: [],
		},
		{
			type: 'CHAN',
			data: { formal_name: 'CHANGE' },
			children: [
				{
					type: 'DATE',
					data: { formal_name: 'DATE' },
					value: '11 FEB 2007',
					children: [
						{
							type: 'TIME',
							data: { formal_name: 'TIME' },
							value: '15:04:14',
							children: [],
						},
					],
				},
			],
		},
	],
}

const Simpsons: RootTag = {
	type: 'root',
	children: [
		head,
		submitter,
		Abraham,
		Bart,
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Clancy_Bouvier@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Clancy /Bouvier/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Clancy',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Bouvier',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'M',
					children: [],
				},
				{
					type: 'FAMS',
					data: { formal_name: 'FAMILY_SPOUSE', pointer: '@F0003@' },
					children: [],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:13:45',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Homer_Simpson@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Homer /Simpson/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Homer',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Simpson',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'M',
					children: [],
				},
				{
					type: 'FAMC',
					data: { formal_name: 'FAMILY_CHILD', pointer: '@F0002@' },
					children: [],
				},
				{
					type: 'FAMS',
					data: { formal_name: 'FAMILY_SPOUSE', pointer: '@F0000@' },
					children: [],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'http://en.wikipedia.org/wiki/Homer_Simpson',
							children: [],
						},
					],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'safety.officer@springfieldnuclear.com',
							children: [],
						},
					],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:05:36',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		Jacqueline,
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Lisa_Simpson@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Lisa /Simpson/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Lisa',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Simpson',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'F',
					children: [],
				},
				{
					type: 'FAMC',
					data: { formal_name: 'FAMILY_CHILD', pointer: '@F0000@' },
					children: [],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'lisa@springfieldhigh.edu',
							children: [],
						},
					],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:04:14',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Maggie_Simpson@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Maggie /Simpson/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Maggie',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Simpson',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'F',
					children: [],
				},
				{
					type: 'FAMC',
					data: { formal_name: 'FAMILY_CHILD', pointer: '@F0000@' },
					children: [],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'http://en.wikipedia.org/wiki/Maggie_Simpson',
							children: [],
						},
					],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:04:14',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Marge_Simpson@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Marge /Simpson/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Marge',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Simpson',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'F',
					children: [],
				},
				{
					type: 'FAMC',
					data: { formal_name: 'FAMILY_CHILD', pointer: '@F0003@' },
					children: [],
				},
				{
					type: 'FAMS',
					data: { formal_name: 'FAMILY_SPOUSE', pointer: '@F0000@' },
					children: [],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'http://en.wikipedia.org/wiki/Marge_Simpson',
							children: [],
						},
					],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:13:45',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Mona_Simpson@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Mona /Simpson/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Mona',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Simpson',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'F',
					children: [],
				},
				{
					type: 'FAMS',
					data: { formal_name: 'FAMILY_SPOUSE', pointer: '@F0002@' },
					children: [],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:05:36',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Patty_Bouvier@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Patty /Bouvier/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Patty',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Bouvier',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'F',
					children: [],
				},
				{
					type: 'FAMC',
					data: { formal_name: 'FAMILY_CHILD', pointer: '@F0003@' },
					children: [],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'http://en.wikipedia.org/wiki/Patty_and_Selma_Bouvier',
							children: [],
						},
					],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:13:45',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'INDI',
			data: { formal_name: 'INDIVIDUAL', xref_id: '@Selma_Bouvier@' },
			children: [
				{
					type: 'NAME',
					data: { formal_name: 'NAME' },
					value: 'Selma /Bouvier/',
					children: [
						{
							type: 'GIVN',
							data: { formal_name: 'GIVEN_NAME' },
							value: 'Selma',
							children: [],
						},
						{
							type: 'SURN',
							data: { formal_name: 'SURNAME' },
							value: 'Bouvier',
							children: [],
						},
					],
				},
				{
					type: 'SEX',
					data: { formal_name: 'SEX' },
					value: 'F',
					children: [],
				},
				{
					type: 'FAMC',
					data: { formal_name: 'FAMILY_CHILD', pointer: '@F0003@' },
					children: [],
				},
				{
					type: 'OBJE',
					data: { formal_name: 'OBJECT' },
					children: [
						{
							type: 'FORM',
							data: { formal_name: 'FORMAT' },
							value: 'URL',
							children: [],
						},
						{
							type: 'FILE',
							data: { formal_name: 'FILE' },
							value: 'http://en.wikipedia.org/wiki/Patty_and_Selma_Bouvier',
							children: [],
						},
					],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:13:45',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		family1,
		{
			type: 'FAM',
			data: { formal_name: 'FAMILY', xref_id: '@F0002@' },
			children: [
				{
					type: 'REFN',
					data: { formal_name: 'REFERENCE' },
					value: '2',
					children: [],
				},
				{
					type: 'HUSB',
					data: { formal_name: 'HUSBAND', pointer: '@Abraham_Simpson@' },
					children: [],
				},
				{
					type: 'WIFE',
					data: { formal_name: 'WIFE', pointer: '@Mona_Simpson@' },
					children: [],
				},
				{
					type: 'CHIL',
					data: { formal_name: 'CHILD', pointer: '@Homer_Simpson@' },
					children: [],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:05:36',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'FAM',
			data: { formal_name: 'FAMILY', xref_id: '@F0003@' },
			children: [
				{
					type: 'REFN',
					data: { formal_name: 'REFERENCE' },
					value: '3',
					children: [],
				},
				{
					type: 'HUSB',
					data: { formal_name: 'HUSBAND', pointer: '@Clancy_Bouvier@' },
					children: [],
				},
				{
					type: 'WIFE',
					data: { formal_name: 'WIFE', pointer: '@Jacqueline_Bouvier@' },
					children: [],
				},
				{
					type: 'CHIL',
					data: { formal_name: 'CHILD', pointer: '@Patty_Bouvier@' },
					children: [],
				},
				{
					type: 'CHIL',
					data: { formal_name: 'CHILD', pointer: '@Selma_Bouvier@' },
					children: [],
				},
				{
					type: 'CHIL',
					data: { formal_name: 'CHILD', pointer: '@Marge_Simpson@' },
					children: [],
				},
				{
					type: 'CHAN',
					data: { formal_name: 'CHANGE' },
					children: [
						{
							type: 'DATE',
							data: { formal_name: 'DATE' },
							value: '11 FEB 2007',
							children: [
								{
									type: 'TIME',
									data: { formal_name: 'TIME' },
									value: '15:13:45',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'TRLR',
			data: { formal_name: 'TRAILER' },
			children: [],
		},
	],
}
