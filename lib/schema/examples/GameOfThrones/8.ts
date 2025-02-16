import type { RootChild } from '../../root.ts'

import type { Family } from '../../family.js'

const fam1: Family = {
	type: 'FAM',
	data: {
		formal_name: 'FAMILY',
		xref_id: '@F49@',
	},
	children: [
		{
			type: 'RIN',
			data: {
				formal_name: 'REC_ID_NUMBER',
			},
			value: 'MH:F49',
			children: [],
		},
		{
			type: '_UID',
			data: {
				custom_tag: true,
			},
			value: '51A8054B3DD0747D448022AF5025D348',
			children: [],
		},
		{
			type: '_UPD',
			data: {
				custom_tag: true,
			},
			value: '30 MAY 2013 22:05:26 GMT-5',
			children: [],
		},
		{
			type: 'HUSB',
			data: {
				formal_name: 'HUSBAND',
				pointer: '@I164@',
			},
			children: [],
		},
		{
			type: 'WIFE',
			data: {
				formal_name: 'WIFE',
				pointer: '@I165@',
			},
			children: [],
		},
		{
			type: 'CHIL',
			data: {
				formal_name: 'CHILD',
				pointer: '@I168@',
			},
			children: [],
		},
		{
			type: 'CHIL',
			data: {
				formal_name: 'CHILD',
				pointer: '@I169@',
			},
			children: [],
		},
		{
			type: 'CHIL',
			data: {
				formal_name: 'CHILD',
				pointer: '@I170@',
			},
			children: [],
		},
		{
			type: 'EVEN',
			data: {
				formal_name: 'EVENT',
			},
			children: [
				{
					type: '_UID',
					data: {
						custom_tag: true,
					},
					value: '51A805503D1F647DA48022AF5025D348',
					children: [],
				},
				{
					type: 'RIN',
					data: {
						formal_name: 'REC_ID_NUMBER',
					},
					value: 'MH:FF46',
					children: [],
				},
				{
					type: 'TYPE',
					data: {
						formal_name: 'TYPE',
					},
					value: 'MYHERITAGE:REL_PARTNERS',
					children: [],
				},
			],
		},
	],
}

export const part8: RootChild[] = [
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F8@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F8',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D5FC4E4761D8548022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:31:08 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I3@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I22@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I23@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D5FC4E4AF1D8648022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF7',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F9@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F9',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D61AB075B1D8B48022AF5025DE30',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I23@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I24@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I25@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I26@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I27@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D61AB07941D8C48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF8',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F10@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F10',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D67BF067B1D9548022AF5025DE30',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I4@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I28@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I29@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I30@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I31@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I32@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D67BF06B41D9648022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF9',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F11@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F11',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D6C0CDF521DA148022AF5025DE30',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I29@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I33@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I34@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I35@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D6C0CDF8C1DA248022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF10',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F12@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F12',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D70150B7D1DAE48022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:35:59 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I5@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I36@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I37@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I38@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D70150BB81DAF48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF11',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F13@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F13',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D752AA53F1DBB48022AF5025DE30',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I38@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I39@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I40@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I41@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I42@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D752AA5791DBC48022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF12',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F14@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F14',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D7BF5532E1DC748022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:39:21 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I44@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I43@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I45@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I46@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I47@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6D7BF553671DC848022AF5025DE30',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF13',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F15@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F15',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6D809312261DD648022AF5025DE30',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 00:39:37 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I45@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I48@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F16@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F16',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E00E7F1A0706148022AF5025DF5C',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I49@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I50@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I51@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E00E7F1DA706248022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF14',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F17@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F17',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E043AC591706D48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:15:14 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I50@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I52@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I53@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I54@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E043AC5CB706E48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF15',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F18@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F18',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E07E56400707548022AF5025DF5C',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I53@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I55@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I56@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I57@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E07E5A000707648022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF16',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F19@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F19',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0ABE755A707F48022AF5025DF5C',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I58@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I54@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I59@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I60@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0ABE7593708048022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF17',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F20@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F20',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E0E1E7334708748022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:19:20 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I61@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I62@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I63@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I64@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I65@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I66@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I67@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I68@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E0E1E736D708848022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF18',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F21@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F21',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E173ACC36709B48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:19:57 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I62@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I69@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I70@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E173ACC70709C48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF19',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F22@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F22',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E186EB43970A148022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:20:45 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I70@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I71@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I72@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I73@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I74@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I75@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E186EB47170A248022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF20',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F23@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F23',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E1C98F15070AD48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:21:45 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I76@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I63@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I77@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I78@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E1C98F4F070AE48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF21',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F24@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F24',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E1F824CA070B548022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:22:10 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I79@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I78@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I80@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E1F824CE270B648022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF22',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F25@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F25',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E21AB0F0D70BB48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:23:34 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I64@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I81@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I82@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I83@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I84@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E21AB0F4670BC48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF23',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F26@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F26',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E2664371170C748022AF5025DF5C',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I65@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I85@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E2664374B70C848022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF24',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F27@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F27',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E293CF1F270CB48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:26:25 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I66@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I86@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I87@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I89@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I90@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I91@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E293CF22C70CC48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF25',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F28@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F28',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E2D38BA9170D448022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:25:39 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I88@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I87@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E2D38BACB70D548022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF26',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F29@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F29',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E31C6102B70DE48022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:27:04 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I67@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I92@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I93@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I94@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E31C6106470DF48022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF27',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F30@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F30',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A6E351C0EC670E648022AF5025DF5C',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 01:28:17 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I68@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I95@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I96@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I97@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I98@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I99@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I100@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I101@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I102@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A6E351C0F0070E748022AF5025DF5C',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF28',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F31@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F31',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FDFCEAA69471C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:34:29 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I103@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I104@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I105@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I106@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I107@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I108@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FDFCEAAA2471D48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF29',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F32@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F32',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FE6751153472A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:36:22 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I104@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I109@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I110@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I111@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I112@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I113@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FE675118C472B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF30',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F33@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F33',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FEB3D6BE7473648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:37:16 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I105@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I114@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I115@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I116@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I117@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FEB3D6C23473748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF31',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F34@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F34',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FEE533D44474048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:37:56 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I106@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I118@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I119@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I120@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FEE533D7E474148022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF32',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F35@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F35',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FF1E5AB8C474848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:39:03 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I121@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I107@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I122@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I123@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I124@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FF1E5ABC7474948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF33',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F36@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F36',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FF671F9E0475248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:39:51 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I125@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FF6720850475348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF34',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F37@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F37',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FF83E26C0475648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:42:12 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I126@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I127@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I128@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I129@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I130@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I131@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FF83E2A60475748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF35',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F38@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F38',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A7FFFF6D914476748022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:42:47 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I128@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I132@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I133@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I134@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A7FFFF6D94E476848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF36',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F39@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F39',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80062BDEAA477048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:45:13 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I135@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I136@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I137@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I138@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I139@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I140@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I141@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80062BDEE6477148022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF37',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F40@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F40',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A800BD3E0DA478048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:45:33 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I142@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A800BD3E116478148022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF38',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F41@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F41',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A800C7DFE60478448022AF5025D348',
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
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I1@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I144@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I145@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I146@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I147@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I148@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I149@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I150@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A800C7DFE9B478548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF39',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F42@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F42',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A801F32E5F1479648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:51:02 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I144@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I143@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I151@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F43@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F43',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8021F77D83479E48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:51:27 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I151@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I152@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F44@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F44',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80319C1F0747A148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:56:01 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I153@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I121@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I154@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I155@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80319C1F4747A248022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF40',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F45@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F45',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A803BBC09D247A948022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 21:58:31 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I156@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I153@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I157@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A803BBC0A1247AA48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF41',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F46@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F46',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A804DF8D59247B948022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:03:46 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I158@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I28@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I159@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I160@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I161@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I162@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A804DF8D5D247BA48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF42',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F47@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F47',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8050944A6D47C548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:04:23 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I159@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I163@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I164@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I165@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I166@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8050944AA947C648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF43',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F48@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F48',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8053E951A847D248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:04:46 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I167@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I165@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8053E951E347D348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF44',
						children: [],
					},
				],
			},
		],
	},
	fam1,
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F50@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F50',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80587D1B0747E548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:06:22 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I160@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I171@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I172@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I173@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I174@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I175@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80587D1B4347E648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF47',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F51@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F51',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A805BA6BB3147F148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:07:04 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I161@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I176@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I177@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A805BA6BB7547F248022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF48',
						children: [],
					},
				],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A805BA6BBB647F348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF49',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'Death of Spouse',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F52@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F52',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A805F29380C47FB48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:07:46 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I162@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I178@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F53@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F53',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A806193F78D47FE48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:08:34 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I179@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I158@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I180@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I181@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I182@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A806193F7CF47FF48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF50',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F54@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F54',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80631EDD2E480648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:09:01 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I182@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I163@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I183@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F55@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F55',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8064FA76B6480B48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:09:29 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I183@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I184@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I185@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I186@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F56@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F56',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A806A348D5D481748022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:14:41 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I187@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I188@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I167@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I195@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I196@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A806A348DAD481848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF51',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F57@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F57',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A806F3679DA482248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:12:08 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I167@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I189@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I190@',
				},
				children: [],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A806F367A55482448022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF53',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'MYHERITAGE:REL_OTHER',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F58@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F58',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8070C844BD482948022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:52:16 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I167@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I192@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I193@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I194@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I191@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I360@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I489@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I490@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I491@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I492@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I493@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I494@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I495@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I496@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I497@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I498@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8070C844F8482A48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF54',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F59@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F59',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80799884E0483B48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:14:54 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I195@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I197@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I198@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A807998851B483C48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF55',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F60@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F60',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A807D2C6F83484148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:53:40 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I499@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I199@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I187@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A807D2C6FC7484248022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF56',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F61@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F61',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A807DCA3948484548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:46:47 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I200@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I199@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I201@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I280@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I281@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A807DCA3988484648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF57',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F62@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F62',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A807FE5E239485048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:17:13 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I201@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I202@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I203@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F63@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F63',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A808549C018485348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:18:32 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I202@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I203@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I204@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I205@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I206@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A808549C062485448022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF58',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F64@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F64',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80892513A8486548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:19:50 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I204@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I207@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I208@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I209@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80892513E4486648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF59',
						children: [],
					},
				],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A808AB4C3DF486E48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF60',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'Death of Spouse',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F65@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F65',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809072A04A487F48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:21:00 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I204@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I210@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I211@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809072A083488048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF61',
						children: [],
					},
				],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809072A0C3488148022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF62',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'Death of Spouse',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F66@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F66',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809125B0A0488648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:21:30 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I212@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I468@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I210@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I213@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I214@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I215@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809125B0E1488748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF63',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F67@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F67',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809399AFF8489548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:22:01 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I214@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I216@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I217@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I218@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I219@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I220@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I221@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809399B033489648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF64',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F68@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F68',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8094E38A7048A348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:22:35 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I222@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I223@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I216@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I224@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I225@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8094E38E9048A448022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF65',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F69@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F69',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809861E42148B248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:23:10 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I226@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I224@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I227@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809861E45E48B348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF66',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F70@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F70',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809D9C235348BD48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:24:25 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I226@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I228@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809D9C238F48BE48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF67',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F71@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F71',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809F12057048C648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:24:49 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I226@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I229@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809F12093048C748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF68',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F72@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F72',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A809FED0C6A48CA48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:25:21 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I230@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I226@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I231@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I232@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A809FED0CAC48CB48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF69',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F73@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F73',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80A39EE61248D248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:29:53 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I233@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I231@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I234@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I237@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I240@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I241@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I242@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I243@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I244@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I245@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I246@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80A39EE64D48D348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF70',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F74@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F74',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80A565158548DD48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:27:19 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I235@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I234@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I236@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80A56515BF48DE48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF71',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F75@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F75',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80ABFBED8048EC48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:28:22 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I238@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I237@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I239@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80ABFBEDBB48ED48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF72',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F76@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F76',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80B55B76B6491A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:30:59 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I232@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I247@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I248@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80B55B76FA491B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF73',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F77@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F77',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80BC9B8E1F492A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:32:47 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I249@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I233@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I250@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80BC9B8E62492B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF74',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F78@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F78',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80BDAAA1CF493048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:32:58 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I250@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I251@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F79@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F79',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80BE5D8249493348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:33:18 GMT-5',
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I251@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I252@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I253@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I254@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F80@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F80',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80C06A5C5D493A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:34:00 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I255@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I222@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I256@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80C06A5CA0493B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF75',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F81@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F81',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80C796C647494848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:37:30 GMT-5',
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I257@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I207@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I260@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I261@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I262@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I263@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80C796C688494948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF76',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F82@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F82',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80C7E39D1E494C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:35:51 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I258@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I257@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I259@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80C7E39D5F494D48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF77',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F83@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F83',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80CFA36625496548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:39:48 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I263@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I264@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I265@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I270@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I271@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I272@',
				},
				children: [],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80CFA366A2496748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF79',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'MYHERITAGE:REL_PARTNERS',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F84@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F84',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80D13E4ADD496A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:38:52 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I263@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I266@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I267@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I268@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I269@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80D13E4B16496B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF80',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F85@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F85',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80D8D1B9A3498248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:40:13 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I273@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I264@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80D8D1B9E3498348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF81',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F86@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F86',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80D9225FBD498648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:40:27 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I274@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I273@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I275@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80D9226000498748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF82',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F87@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F87',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80DE84DF8F498D48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:42:10 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I260@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I276@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I277@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I278@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I279@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80DE84DFCC498E48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF83',
						children: [],
					},
				],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80DE84E00C498F48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF84',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'Separation',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F88@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F88',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80F334D68549AC48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:54:27 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I282@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I200@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I283@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I285@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I287@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I288@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I289@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A80F334D6C949AD48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF85',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F89@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F89',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80F43621FE49B348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:47:31 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I283@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I284@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F90@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F90',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A80FEF3805949BD48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:50:23 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I285@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I286@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F91@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F91',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8113C4286E49CB48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:58:10 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I290@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I291@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I282@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I292@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I293@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I294@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I295@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8113C428AF49CC48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF86',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F92@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F92',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8119CA874D49DB48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:57:32 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I293@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I294@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8119CA878A49DC48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF87',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F93@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F93',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A811CF76A8149E848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:58:27 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I295@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I296@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I297@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F94@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F94',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A811FFDB38049F248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 22:59:20 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I292@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I298@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I299@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F95@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F95',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A812435796149FA48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:00:26 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I298@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I300@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I301@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F96@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F96',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A812867200F4A0448022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:02:00 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I302@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I303@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I290@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I304@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A81286720524A0548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF88',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F97@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F97',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A812B7A261E4A0D48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:02:15 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I305@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I304@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A812B7A265B4A0E48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF89',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F98@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F98',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A812C66D0654A1148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:02:55 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I306@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I302@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I303@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I307@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A812C66D0A84A1248022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF90',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F99@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F99',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81305A03D14A1B48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:04:29 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I302@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I309@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I310@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I311@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A81305A040F4A1C48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF91',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F100@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F100',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A813576C5B44A2548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:05:08 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I302@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I308@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I312@',
				},
				children: [],
			},
			{
				type: 'EVEN',
				data: {
					formal_name: 'EVENT',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A8135A263B04A2B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF93',
						children: [],
					},
					{
						type: 'TYPE',
						data: {
							formal_name: 'TYPE',
						},
						value: 'MYHERITAGE:REL_PARTNERS',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F101@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F101',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81377DA1FF4A3048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:07:07 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I312@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I313@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I314@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I315@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I316@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I317@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I318@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I319@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F102@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F102',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A813EEBCC694A4C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:07:26 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I317@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I320@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F103@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F103',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81405EFB9C4A4F48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:13:40 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I321@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I322@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I308@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I323@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I324@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I334@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I335@',
				},
				children: [],
			},
			{
				type: 'MARR',
				data: {
					formal_name: 'MARRIAGE',
				},
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A81405EFBE04A5048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF94',
						children: [],
					},
				],
			},
		],
	},
]
