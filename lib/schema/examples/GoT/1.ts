import type { Gedcom, Head } from '#lib/schema/head'
import type { Individual } from '#lib/schema/individual'
import type { Submitter, TreeNode } from '#lib/schema/root'

const gedcom: Gedcom = {
	type: 'GEDC',
	data: {
		formal_name: 'GEDCOM',
	},
	children: [
		{
			type: 'VERS',
			data: {
				formal_name: 'VERSION',
			},
			value: '5.5',
			children: [],
		},
		{
			type: 'FORM',
			data: {
				formal_name: 'FORMAT',
			},
			value: 'LINEAGE-LINKED',
			children: [],
		},
	],
}

const head: Head = {
	type: 'HEAD',
	data: {
		formal_name: 'HEADER',
	},
	children: [
		gedcom,
		{
			type: 'CHAR',
			data: {
				formal_name: 'CHARACTER',
			},
			value: 'UTF-8',
			children: [],
		},
		{
			type: 'LANG',
			data: {
				formal_name: 'LANGUAGE',
			},
			value: 'English',
			children: [],
		},
		{
			type: 'SOUR',
			data: {
				formal_name: 'SOURCE',
			},
			value: 'MYHERITAGE',
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'MyHeritage Family Tree Builder',
					children: [],
				},
				{
					type: 'VERS',
					data: {
						formal_name: 'VERSION',
					},
					value: '7.0.0.7107',
					children: [],
				},
				{
					type: '_RTLSAVE',
					data: {
						custom_tag: true,
					},
					value: 'RTL',
					children: [],
				},
				{
					type: 'CORP',
					data: {
						formal_name: 'CORPORATE',
					},
					value: 'MyHeritage.com',
					children: [
						{
							type: 'ADDR',
							data: {
								formal_name: 'ADDRESS',
							},
							children: [
								{
									type: 'CITY',
									data: {
										formal_name: 'CITY',
									},
									value: 'PO box 50, Terminal Park, Or Yehuda',
									children: [],
								},
								{
									type: 'POST',
									data: {
										formal_name: 'POSTAL_CODE',
									},
									value: '60250',
									children: [],
								},
								{
									type: 'CTRY',
									data: {
										formal_name: 'COUNTRY',
									},
									value: 'Israel',
									children: [],
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'SUBM',
			data: {
				formal_name: 'SUBMITTER',
				pointer: '@U1@',
			},
			children: [],
		},
		{
			type: 'DEST',
			data: {
				formal_name: 'DESTINATION',
			},
			value: 'MYHERITAGE',
			children: [],
		},
		{
			type: 'DATE',
			data: {
				formal_name: 'DATE',
			},
			value: '31 MAY 2013',
			children: [
				{
					type: 'TIME',
					data: {
						formal_name: 'TIME',
					},
					value: '01:06:48 GMT-5',
					children: [],
				},
			],
		},
		{
			type: '_RINS',
			data: {
				custom_tag: true,
			},
			value: 'I501,F172,N0,M0,R0,S0,U1,L0,P0,Q0,IF734,FF166,SCd',
			children: [],
		},
		{
			type: '_UID',
			data: {
				custom_tag: true,
			},
			value: '51A80DC3C7104498A48022AF5025D348',
			children: [],
		},
		{
			type: '_DESCRIPTION_AWARE',
			data: {
				custom_tag: true,
			},
			value: 'Y',
			children: [],
		},
		{
			type: '_FACTS_DEFRAGGED',
			data: {
				custom_tag: true,
			},
			value: 'Y',
			children: [],
		},
	],
}

const submitter: Submitter = {
	type: 'SUBM',
	data: {
		formal_name: 'SUBMITTER',
		xref_id: '@U1@',
	},
	children: [
		{
			type: 'RIN',
			data: {
				formal_name: 'REC_ID_NUMBER',
			},
			value: 'MH:U1',
			children: [],
		},
	],
}

const indi1: Individual = {
	type: 'INDI',
	data: {
		formal_name: 'INDIVIDUAL',
		xref_id: '@I1@',
	},
	children: [
		{
			type: 'RIN',
			data: {
				formal_name: 'REC_ID_NUMBER',
			},
			value: 'MH:I1',
			children: [],
		},
		{
			type: '_UID',
			data: {
				custom_tag: true,
			},
			value: '51A6D417323F81D3148022AF5025DE30',
			children: [],
		},
		{
			type: '_UPD',
			data: {
				custom_tag: true,
			},
			value: '30 MAY 2013 21:49:57 GMT-5',
			children: [],
		},
		{
			type: 'NAME',
			data: {
				formal_name: 'NAME',
			},
			value: 'Walder /Frey/',
			children: [
				{
					type: 'GIVN',
					data: {
						formal_name: 'GIVEN_NAME',
					},
					value: 'Walder',
					children: [],
				},
				{
					type: 'SURN',
					data: {
						formal_name: 'SURNAME',
					},
					value: 'Frey',
					children: [],
				},
			],
		},
		{
			type: 'SEX',
			data: {
				formal_name: 'SEX',
			},
			value: 'M',
			children: [],
		},
		{
			type: 'BIRT',
			data: {
				formal_name: 'BIRTH',
			},
			children: [
				{
					type: '_UID',
					data: {
						custom_tag: true,
					},
					value: '51A6D417304541D2C48022AF5025DE30',
					children: [],
				},
				{
					type: 'RIN',
					data: {
						formal_name: 'REC_ID_NUMBER',
					},
					value: 'MH:IF1',
					children: [],
				},
			],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F1@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F16@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F20@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F31@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F36@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F37@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F39@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F40@',
			},
			children: [],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F41@',
			},
			children: [],
		},
	],
}

export const part1: TreeNode[] = [
	head,
	submitter,
	indi1,
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I2@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I2',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D417327961D3248022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:12:09 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Perra /Royce/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Perra',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Royce',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D417304CE1D2D48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF2',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D4173050D1D2E48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF3',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F1@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I3@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I3',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D438A1B251D3448022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:30:52 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Stevron /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Stevron',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D438A1AF61D3348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF4',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F2@',
				},
				children: [],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F6@',
				},
				children: [],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F8@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F1@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I4@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I4',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D4449DC401D3648022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:32:59 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Emmon /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Emmon',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D4449DC101D3548022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF5',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F10@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F1@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I5@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I5',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D44D250C11D3848022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:35:13 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Aenys /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Aenys',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D44D250911D3748022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF6',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F12@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F1@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I6@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I6',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D471251771D4748022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:27:49 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Corenna /Swann/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Corenna',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Swann',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D471251101D4548022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF7',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D471251451D4648022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF8',
						children: [],
					},
					{
						type: 'CAUS',
						data: {
							formal_name: 'CAUSE',
						},
						value: 'Illness',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F2@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I7@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I7',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D48564AA91D4B48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:24:37 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Ryman /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Ryman',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D48564A791D4A48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF9',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F3@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F2@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I8@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I8',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D497DC4571D4D48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:25:49 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Edwyn /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Edwyn',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D497DC4261D4C48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF10',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F4@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F3@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I9@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I9',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D4A32E89E1D5048022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:26:17 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Walder 'Black Walder' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Walder 'Black Walder'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D4A32E86D1D4F48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF11',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F3@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I10@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I10',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D4ACD25EE1D5248022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:26:42 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Petyr /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Petyr',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D4ACD25BE1D5148022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF12',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F5@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F3@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I11@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I11',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D4CD6EFEC1D5448022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:25:49 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Janyce /Hunter/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Janyce',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Hunter',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D4CD6EFBB1D5348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF13',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F4@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I12@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I12',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D4D0518581D5848022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:25:52 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Walda /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Walda',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D4D05182A1D5748022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF14',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F4@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I13@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I13',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5024243B1D5C48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:26:42 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Mylenda /Caron/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Mylenda',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Caron',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5024240C1D5B48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF15',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F5@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I14@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I14',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5066B0061D6048022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:26:46 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Perra /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Perra',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5066AFD61D5F48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF16',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F5@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I15@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I15',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5663851B1D6648022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:28:22 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Jeyne /Lydden/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Jeyne',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Lydden',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D566388D61D6748022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF18',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5663893C1D6848022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF19',
						children: [],
					},
					{
						type: 'CAUS',
						data: {
							formal_name: 'CAUSE',
						},
						value: 'Accident',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F6@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I16@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I16',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D57F7E2CC1D6C48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:28:47 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Aegon 'Jinglebell' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Aegon 'Jinglebell'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D57F7E2A01D6B48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF20',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F6@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I17@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I17',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5AE7585F1D7148022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:29:52 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Maegelle /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Maegelle',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5AE75D031D7248022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF23',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5AE75D681D7348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF24',
						children: [],
					},
					{
						type: 'CAUS',
						data: {
							formal_name: 'CAUSE',
						},
						value: 'Maternal Death',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F7@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F6@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I18@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I18',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5C0AB53F1D7548022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:29:52 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Dafyn /Vance/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Dafyn',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Vance',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5C0AB50F1D7448022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF25',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F7@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I19@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I19',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5C4538291D7948022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:29:56 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Marianne /Vance/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Marianne',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Vance',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5C4537FA1D7848022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF26',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F7@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I20@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I20',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5CEC6FF51D7B48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:30:06 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Walder /Vance/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Walder',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Vance',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5CEC6FBF1D7A48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF27',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F7@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I21@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I21',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5D21E8B71D7D48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:30:10 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Patrek /Vance/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Patrek',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Vance',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5D21E8871D7C48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF28',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F7@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I22@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I22',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5FC4C4501D8248022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:30:52 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Marsella /Waynwood/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Marsella',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Waynwood',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5FC4C8D11D8348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF31',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5FC4C93E1D8448022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF32',
						children: [],
					},
					{
						type: 'CAUS',
						data: {
							formal_name: 'CAUSE',
						},
						value: 'Maternal Death',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F8@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I23@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I23',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D60CE4C3F1D8848022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:31:22 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Walton /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Walton',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D60CE4C101D8748022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF33',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F9@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F8@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I24@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I24',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D61AAF77B1D8A48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:31:22 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Deana /Hardyng/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Deana',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Hardyng',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D61AAF74B1D8948022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF34',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F9@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I25@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I25',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D6258A2201D8E48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:31:33 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Steffon /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Steffon',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D6258A1F11D8D48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF35',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F9@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I26@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I26',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D62B91CE21D9048022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:31:39 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Walda 'Fair Walda' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Walda 'Fair Walda'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D62B91CB31D8F48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF36',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F9@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I27@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I27',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D639329E71D9248022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:31:53 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Bryan /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Bryan',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D639329B81D9148022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF37',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F9@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I28@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I28',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D67BEF61F1D9448022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:32:59 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Genna /Lannister/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Genna',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Lannister',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D67BEF51F1D9348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF38',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F10@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F46@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I29@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I29',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D68349B251D9848022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:34:08 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Cleos /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Cleos',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D68349AF61D9748022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF39',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F11@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F10@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I30@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I30',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D68ED11001D9A48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:33:18 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Lyonel /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Lyonel',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D68ED0E001D9948022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF40',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F10@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I31@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I31',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D69D843DA1D9C48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:33:33 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Tion /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Tion',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D69D843AA1D9B48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF41',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F10@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I32@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I32',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D6AB833F11D9E48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:33:47 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Walder 'Red Walder' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Walder 'Red Walder'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D6AB833C21D9D48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF42',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F10@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I33@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I33',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D6C0CCD611DA048022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:34:08 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Jeyne /Darry/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Jeyne',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Darry',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D6C0CCD321D9F48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF43',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F11@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I34@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I34',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D6C58239B1DA448022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:34:13 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Tywin 'Ty' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Tywin 'Ty'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D6C58236D1DA348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF44',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F11@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I35@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I35',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D6CFBEFC01DA648022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:34:23 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Willem /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Willem',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D6CFBEF911DA548022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF45',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F11@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I36@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I36',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7014E57E1DAB48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:35:13 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Tyana /Wylde/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Tyana',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Wylde',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7014EA991DAC48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF48',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7014EB001DAD48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF49',
						children: [],
					},
					{
						type: 'CAUS',
						data: {
							formal_name: 'CAUSE',
						},
						value: 'Maternal Death',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F12@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I37@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I37',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D725EE5601DB148022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:35:49 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Aegon 'Bloodborn' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Aegon 'Bloodborn'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D725EE5301DB048022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF50',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F12@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I38@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I38',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D72F746901DB348022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:36:34 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Rhaegar /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Rhaegar',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D72F743701DB248022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF51',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F13@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F12@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I39@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I39',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D752A7DDD1DB848022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:36:34 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Jeyne /Beesbury/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Jeyne',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Beesbury',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D752A82601DB948022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF54',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D752A82C61DBA48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF55',
						children: [],
					},
					{
						type: 'CAUS',
						data: {
							formal_name: 'CAUSE',
						},
						value: 'Illness',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F13@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I40@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I40',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D760133FB1DBE48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:36:48 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Robert /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Robert',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D760133CE1DBD48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF56',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F13@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I41@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I41',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7672D91A1DC048022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:36:55 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: "Walda 'White Walda' /Frey/",
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: "Walda 'White Walda'",
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7672D8EA1DBF48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF57',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F13@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I42@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I42',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D770789141DC248022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:37:04 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Jonos /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Jonos',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D770788E31DC148022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF58',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F13@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I43@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I43',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7AE9DE8F1DC448022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:38:23 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Perriane /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Perriane',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7AE9DE5F1DC348022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF59',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F14@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F1@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I44@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I44',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7BF53F901DC648022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:01:36 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Leslyn /Haigh/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Leslyn',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Haigh',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7BF53F601DC548022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF60',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F14@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I45@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I45',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7D9503C51DCA48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:01:15 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Harys /Haigh/',
				children: [
					{
						type: 'NPFX',
						data: {
							formal_name: 'NAME_PREFIX',
						},
						value: 'Ser',
						children: [],
					},
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Harys',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Haigh',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7D9503941DC948022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF61',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F15@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F14@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I46@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I46',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7E9873B81DCE48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:01:25 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Donnel /Haigh/',
				children: [
					{
						type: 'NPFX',
						data: {
							formal_name: 'NAME_PREFIX',
						},
						value: 'Ser',
						children: [],
					},
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Donnel',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Haigh',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7E9877581DCF48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF63',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F14@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I47@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I47',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7F995AF61DD348022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:01:08 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Alyn /Haigh/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Alyn',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Haigh',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7F995AC61DD248022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF64',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F14@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I48@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I48',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D809307EF1DD548022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:01:42 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Walder /Haigh/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Walder',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Haigh',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D809307C11DD448022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF65',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F15@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I49@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I49',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E00E7DDBA706048022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:13:50 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Cyrenna /Swann/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Cyrenna',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Swann',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E00E7DD53705E48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF66',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E00E7DD87705F48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF67',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F16@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I50@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I50',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E012B4177706448022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:14:43 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Jared /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Jared',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E012B4149706348022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF68',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F17@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F16@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I51@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I51',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0261EED0706848022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:14:14 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Luceon /Frey/',
				children: [
					{
						type: 'NPFX',
						data: {
							formal_name: 'NAME_PREFIX',
						},
						value: 'Septon',
						children: [],
					},
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Luceon',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0261F2C8706948022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF70',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F16@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I52@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I52',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E043AAD0C706C48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:14:43 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Alys /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Alys',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E043AACA7706A48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF71',
						children: [],
					},
				],
			},
			{
				type: 'DEAT',
				data: {
					formal_name: 'DEATH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E043AACDA706B48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF72',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F17@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I53@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I53',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E05E28EF8707048022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:15:48 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Tytos /Frey/',
				children: [
					{
						type: 'NPFX',
						data: {
							formal_name: 'NAME_PREFIX',
						},
						value: 'Ser',
						children: [],
					},
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Tytos',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E05E28ECA706F48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF73',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F18@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F17@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I54@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I54',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0622D5E2707248022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:16:27 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Kyra /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Kyra',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0622D5B4707148022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF74',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F19@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F17@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I55@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I55',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E07EF2F1D707448022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:15:42 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Zhoe /Blanetree/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Zhoe',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Blanetree',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E07EF2EE7707348022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF75',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F18@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I56@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I56',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E08CCB94D707A48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:15:56 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Zia /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Zia',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E08CCB91F707948022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF76',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F18@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I57@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I57',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0915875F707C48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:16:01 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Zachery /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Zachery',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E09158731707B48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF77',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F18@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I58@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I58',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0ABE5C74707E48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:16:27 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Garse /Goodbrook/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Garse',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Goodbrook',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0ABE5C46707D48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF78',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F19@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I59@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I59',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0AD4A73F708248022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:16:29 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Walder /Goodbrook/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Walder',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Goodbrook',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0AD4A711708148022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF79',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F19@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I60@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I60',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0B1EB5BB708448022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:16:33 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Jeyne /Goodbrook/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Jeyne',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Goodbrook',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0B1EB58E708348022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF80',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F19@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I61@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I61',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0E1E5949708648022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:17:21 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Amarei /Crakehall/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Amarei',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Crakehall',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0E1E591A708548022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF81',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I62@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I62',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0EDE191B708A48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:19:47 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Hosteen /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Hosteen',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0EDE18EB708948022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF82',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F21@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I63@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I63',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0F3AC73E708C48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:21:13 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Lythene /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Lythene',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0F3AC710708B48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF83',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F23@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I64@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I64',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E110AAA59708E48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:22:34 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Symond /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Symond',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E110AAA2B708D48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF84',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F25@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I65@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I65',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E11D793A5709048022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:23:50 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Danwell /Frey/',
				children: [
					{
						type: 'NPFX',
						data: {
							formal_name: 'NAME_PREFIX',
						},
						value: 'Ser',
						children: [],
					},
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Danwell',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E11D79370708F48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF85',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F26@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I66@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I66',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E146E8F2E709448022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:24:35 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Merrett /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Merrett',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E146E8EF8709348022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF86',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F27@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I67@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I67',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E14F15F41709648022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:26:52 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Geremy /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Geremy',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E14F15F12709548022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF87',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F29@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I68@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I68',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E1585470E709848022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:27:45 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Raymund /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Raymund',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E158546E0709748022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF88',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F30@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F20@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I69@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I69',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E173AABF5709A48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:19:47 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Bellena /Hawick/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Bellena',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Hawick',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E173AABC4709948022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF89',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F21@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I70@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I70',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E17DB26CA709E48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:20:06 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Arwood /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Arwood',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E17DB269C709D48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF90',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F22@',
				},
				children: [],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F21@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I71@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I71',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E186E942B70A048022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:20:06 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Ryella /Royce/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Ryella',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Royce',
						children: [],
					},
					{
						type: '_MARNM',
						data: {
							custom_tag: true,
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E186E93FB709F48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF91',
						children: [],
					},
				],
			},
			{
				type: 'FAMS',
				data: {
					formal_name: 'FAMILY_SPOUSE',
					pointer: '@F22@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I72@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I72',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E1971B08B70A448022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:20:23 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Ryella /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Ryella',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'F',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E1971B05B70A348022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF92',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F22@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I73@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I73',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E1A39AB7070A648022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:20:35 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Androw /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Androw',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E1A39AB4270A548022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF93',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F22@',
				},
				children: [],
			},
		],
	},
	{
		type: 'INDI',
		data: {
			formal_name: 'INDIVIDUAL',
			xref_id: '@I74@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:I74',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E1A548CAB70A848022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:20:37 GMT-5',
				children: [],
			},
			{
				type: 'NAME',
				data: {
					formal_name: 'NAME',
				},
				value: 'Alyn /Frey/',
				children: [
					{
						type: 'GIVN',
						data: {
							formal_name: 'GIVEN_NAME',
						},
						value: 'Alyn',
						children: [],
					},
					{
						type: 'SURN',
						data: {
							formal_name: 'SURNAME',
						},
						value: 'Frey',
						children: [],
					},
				],
			},
			{
				type: 'SEX',
				data: {
					formal_name: 'SEX',
				},
				value: 'M',
				children: [],
			},
			{
				type: 'BIRT',
				data: {
					formal_name: 'BIRTH',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E1A548C7C70A748022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:IF94',
						children: [],
					},
				],
			},
			{
				type: 'FAMC',
				data: {
					formal_name: 'FAMILY_CHILD',
					pointer: '@F22@',
				},
				children: [],
			},
		],
	},
]
