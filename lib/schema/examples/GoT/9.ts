import type { Family } from '#lib/schema/family'
import type { TreeNode } from '#lib/schema/root'

const fam1: Family = {
	type: 'FAM',
	data: {
		formal_name: 'FAMILY',
		xref_id: '@F170@',
	},
	children: [
		{
			type: 'RIN',
			data: {
				formal_name: 'REC_ID_NUMBER',
			},
			value: 'MH:F170',
			children: [],
		},
		{
			type: '_UID',
			data: {
				custom_tag: true,
			},
			value: '51A82B51129964D3F48022AF5025D348',
			children: [],
		},
		{
			type: '_UPD',
			data: {
				custom_tag: true,
			},
			value: '31 MAY 2013 00:47:18 GMT-5',
			children: [],
		},
		{
			type: 'HUSB',
			data: {
				formal_name: 'HUSBAND',
				pointer: '@I168@',
			},
			children: [],
		},
		{
			type: 'WIFE',
			data: {
				formal_name: 'WIFE',
				pointer: '@I218@',
			},
			children: [],
		},
		{
			type: 'ENGA',
			data: {
				formal_name: 'ENGAGEMENT',
			},
			children: [
				{
					type: '_UID',
					data: {
						custom_tag: true,
					},
					value: '51A82B5684F984D4548022AF5025D348',
					children: [],
				},
				{
					type: 'RIN',
					data: {
						formal_name: 'REC_ID_NUMBER',
					},
					value: 'MH:FF165',
					children: [],
				},
			],
		},
	],
}

export const part9: TreeNode[] = [
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F104@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F104',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8149849A2F4A6648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:10:57 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I325@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I323@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I326@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I327@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I328@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I329@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I330@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I331@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I332@',
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
						value: '51A8149849A6C4A6748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF95',
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
			xref_id: '@F105@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F105',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A814D9EDB364A7948022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:15:28 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I333@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I323@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I337@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I338@',
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
						value: '51A814D9EDBB44A7B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF97',
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
			xref_id: '@F106@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F106',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A815B1264E94AB448022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:14:57 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I333@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I336@',
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
						value: '51A815B1265254AB548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF98',
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
			xref_id: '@F107@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F107',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A816564633D4AC448022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:17:42 GMT-5',
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I339@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I321@',
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
						value: '51A81656463814AC548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF99',
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
			xref_id: '@F108@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F108',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8166599B194AC848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:18:11 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I340@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I341@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I339@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I342@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I343@',
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
						value: '51A8166599B5C4AC948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF100',
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
			xref_id: '@F109@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F109',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8167BC50AE4AD248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:19:19 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I340@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I344@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I345@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I346@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I347@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I348@',
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
						value: '51A8167BC50EB4AD348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF101',
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
			xref_id: '@F110@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F110',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A816E6CC5204AEA48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:20:06 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I349@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I306@',
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
						value: '51A816E6CC9804AEB48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF102',
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
			xref_id: '@F111@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F111',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A816F6611174AEF48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:21:02 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I350@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I351@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I349@',
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
						value: '51A816F66115B4AF048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF103',
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
			xref_id: '@F112@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F112',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8174A14DA94AFD48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:21:54 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I352@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I350@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I351@',
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
						value: '51A8174A14DEE4AFE48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF104',
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
			xref_id: '@F113@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F113',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8178A2028A4B1448022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:23:05 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I353@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I354@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I352@',
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
						value: '51A8178A202CD4B1548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF105',
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
			xref_id: '@F114@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F114',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A817B027E9F4B1C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:23:40 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I353@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I355@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I356@',
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
						value: '51A817B027EDB4B1D48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF106',
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
			xref_id: '@F115@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F115',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A817CF98B274B2448022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:23:59 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I356@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I357@',
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
						value: '51A817CF98B634B2548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF107',
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
			xref_id: '@F116@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F116',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A817E6D0D744B2F48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:24:35 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I358@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I359@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I353@',
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
						value: '51A817E6D0DB74B3048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF108',
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
			xref_id: '@F117@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F117',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A818028F8504B3648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:25:38 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I358@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I361@',
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
						value: '51A818028FC204B3748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF109',
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
			xref_id: '@F118@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F118',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8181EDD10A4B3E48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:25:18 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I361@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I362@',
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
						value: '51A8181EDD1454B3F48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF110',
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
			xref_id: '@F119@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F119',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8182A6041F4B4348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:25:30 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I363@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I362@',
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
						value: '51A8182A604644B4448022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF111',
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
			xref_id: '@F120@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F120',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A819457C6E04B4748022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:30:13 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I364@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I358@',
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
						value: '51A819457C7244B4848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF112',
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
			xref_id: '@F121@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F121',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A819516ECE04B4B48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:30:38 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I365@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I364@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I366@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I367@',
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
						value: '51A819516F1104B4C48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF113',
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
			xref_id: '@F122@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F122',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81979884724B5348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:31:48 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I368@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I370@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I365@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I369@',
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
						value: '51A81979884B74B5448022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF114',
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
			xref_id: '@F123@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F123',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A819D6991E24B7248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:32:57 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I371@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I372@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I368@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I370@',
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
						value: '51A819D6992274B7348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF115',
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
			xref_id: '@F124@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F124',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A819F58D12E4B7948022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:33:17 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I373@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I371@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I372@',
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
						value: '51A819F58D1724B7A48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF116',
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
			xref_id: '@F125@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F125',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81A66EC1114B8348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:35:02 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I196@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I374@',
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
						value: '51A81A66EC18E4B8548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF118',
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
			xref_id: '@F126@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F126',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81A8C86A714B8848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:36:18 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I375@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I376@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I374@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I377@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I378@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I379@',
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
						value: '51A81A8C86AB44B8948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF119',
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
			xref_id: '@F127@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F127',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81AC7166304B9F48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:39:56 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I380@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I382@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I375@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I386@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I387@',
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
						value: '51A81AC7166734BA048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF120',
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
						value: '51A81B27699DE4BA948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF122',
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
			xref_id: '@F128@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F128',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81B0BBE40B4BA548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:37:47 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I377@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I381@',
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
						value: '51A81B0BBE4474BA648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF121',
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
			xref_id: '@F129@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F129',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81B96877F34BBC48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:40:06 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I388@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I386@',
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
						value: '51A81B96878314BBD48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF123',
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
			xref_id: '@F130@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F130',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81BA5D992F4BC048022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:40:36 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I389@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I387@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I390@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I391@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I392@',
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
						value: '51A81BA5D996D4BC148022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF124',
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
			xref_id: '@F131@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F131',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81BCDB689C4BCA48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:41:43 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I393@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I380@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I383@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I384@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I385@',
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
						value: '51A81BCDB68E14BCB48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF125',
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
			xref_id: '@F132@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F132',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81C3D938904BD348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:43:13 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I383@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I394@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I396@',
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
						value: '51A81C42465354BDC48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF126',
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
			xref_id: '@F133@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F133',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81C946D19E4BE248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:44:53 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I384@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I395@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I397@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F134@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F134',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81CC526F294BE748022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:46:04 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I395@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I398@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I399@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I400@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I401@',
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
						value: '51A81CC526F654BE848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF127',
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
						value: '51A81CCA250994BED48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF128',
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
			xref_id: '@F135@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F135',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81D082F4E34BFC48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:46:51 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I399@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I402@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I403@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I404@',
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
						value: '51A81D082F5204BFD48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF129',
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
			xref_id: '@F136@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F136',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81D48E24C74C0648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:47:20 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I405@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I400@',
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
						value: '51A81D48E25064C0748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF130',
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
			xref_id: '@F137@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F137',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81F28EF04C4C0A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:00:14 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I406@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I407@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I376@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I408@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I410@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I412@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I415@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I416@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I417@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I419@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I421@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I422@',
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
						value: '51A81F28EF0904C0B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF131',
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
			xref_id: '@F138@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F138',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81F73DDA514C1248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:56:35 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I408@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I409@',
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
						value: '51A81F73DDA904C1348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF132',
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
			xref_id: '@F139@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F139',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81F8515E994C1848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:18:59 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I411@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I410@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I463@',
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
						value: '51A81F8515ED74C1948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF133',
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
			xref_id: '@F140@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F140',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A81FC9935584C1E48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:58:07 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I413@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I412@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I414@',
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
						value: '51A81FC9935974C1F48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF134',
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
			xref_id: '@F141@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F141',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8200E9731E4C2C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:59:10 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I417@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I418@',
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
						value: '51A8200E9735A4C2D48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF135',
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
			xref_id: '@F142@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F142',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8202E6226A4C3248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '30 MAY 2013 23:59:42 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I420@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I419@',
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
						value: '51A8202E622A64C3348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF136',
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
			xref_id: '@F143@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F143',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8205C9E1104C3C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:00:28 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I423@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I422@',
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
						value: '51A8205C9E14C4C3D48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF137',
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
						value: '51A8205C9E18C4C3E48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF138',
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
			xref_id: '@F144@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F144',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8206F1F8084C4148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:00:47 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I424@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I422@',
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
						value: '51A8206F1F8854C4348022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF140',
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
			xref_id: '@F145@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F145',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A820968EA564C4648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:01:26 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I425@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I406@',
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
						value: '51A820968EA9B4C4748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF141',
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
			xref_id: '@F146@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F146',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A820A0DDF6A4C4A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:02:08 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I426@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I425@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I427@',
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
						value: '51A820A0DDFAE4C4B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF142',
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
			xref_id: '@F147@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F147',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A821A5BDA054C5848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:05:57 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I423@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I428@',
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
						value: '51A821A5BDA434C5948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF143',
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
			xref_id: '@F148@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F148',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A821A959B604C5C48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:48:50 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I429@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I430@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I488@',
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
						value: '51A821A959FB04C5D48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF144',
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
			xref_id: '@F149@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F149',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A821BB8E9B84C6248022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:08:56 GMT-5',
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I430@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I431@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I432@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I433@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I434@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I435@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F150@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F150',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82260E90F14C6D48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:09:09 GMT-5',
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I432@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I436@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I437@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F151@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F151',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A822B0AA80E4C7648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:10:24 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I438@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I389@',
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
						value: '51A822B0AA8534C7748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF145',
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
			xref_id: '@F152@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F152',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A822BAC3A734C7A48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:10:53 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I439@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I438@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I382@',
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
						value: '51A822BAC3AB84C7B48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF146',
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
			xref_id: '@F153@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F153',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8231A69B324C8848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:12:26 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I440@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I197@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I441@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I442@',
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
						value: '51A8231A69B784C8948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF147',
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
			xref_id: '@F154@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F154',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8234E72F924C9548022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:13:48 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I443@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I440@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I444@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I445@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I446@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I447@',
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
						value: '51A8234E72FD84C9648022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF148',
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
			xref_id: '@F155@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F155',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8238C32E884CA748022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:14:56 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I444@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I448@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I449@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I450@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I407@',
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
						value: '51A8238C32EC54CA848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF149',
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
			xref_id: '@F156@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F156',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A823DD3B7104CAF48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:15:25 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I451@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I446@',
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
						value: '51A823DD3B74B4CB048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF150',
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
			xref_id: '@F157@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F157',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A824104FA334CB148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:16:42 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I447@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I189@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I452@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I453@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F158@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F158',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8244973EBC4CBF48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:17:24 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I454@',
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
					pointer: '@I455@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I456@',
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
						value: '51A8244973EF94CC048022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF151',
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
			xref_id: '@F159@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F159',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82485AAA574CC748022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:18:30 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I457@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I450@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I458@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I459@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I460@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I461@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I462@',
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
						value: '51A82485AAA9C4CC848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF152',
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
			xref_id: '@F160@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F160',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A824ED50E004CD848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:19:57 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I464@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I212@',
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
						value: '51A824ED512604CD948022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF153',
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
			xref_id: '@F161@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F161',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A825059C3694CDC48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:21:48 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I465@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I467@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I464@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I466@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I469@',
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
						value: '51A825059C3B04CDD48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF154',
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
			xref_id: '@F162@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F162',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82566298564CF348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:22:06 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I470@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I469@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I471@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I472@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I473@',
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
						value: '51A82566298944CF448022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF155',
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
			xref_id: '@F163@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F163',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8257AA85414CFD48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:22:21 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I474@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I471@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I475@',
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
						value: '51A8257AA857C4CFE48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF156',
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
			xref_id: '@F164@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F164',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A827FD81B844D0948022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:34:14 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I476@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I479@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I188@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I477@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I478@',
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
						value: '51A827FD81BCA4D0A48022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF157',
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
			xref_id: '@F165@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F165',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A828B1125B04D1648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:36:01 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I480@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I479@',
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
						value: '51A828B1125F54D1748022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF158',
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
			xref_id: '@F166@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F166',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82950C9BCB4D1F48022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:38:40 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I213@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I481@',
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
						value: '51A82950C9C4B4D2148022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF160',
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
			xref_id: '@F167@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F167',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82960DF1D94D2448022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:39:45 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I482@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I481@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I483@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I484@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I485@',
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
						value: '51A82960DF21F4D2548022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF161',
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
			xref_id: '@F168@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F168',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A8299B245154D3348022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:39:55 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I483@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I486@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F169@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F169',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A829B7BCAA14D3648022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:40:23 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I487@',
				},
				children: [],
			},
			{
				type: 'WIFE',
				data: {
					formal_name: 'WIFE',
					pointer: '@I485@',
				},
				children: [],
			},
			{
				type: 'ENGA',
				data: {
					formal_name: 'ENGAGEMENT',
				},
				value: 'Y',
				children: [
					{
						type: '_UID',
						data: {
							custom_tag: true,
						},
						value: '51A829B7BCB194D3848022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF163',
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
			xref_id: '@F171@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F171',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82BBBC91CA4D4848022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:48:59 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I488@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I423@',
				},
				children: [],
			},
		],
	},
	{
		type: 'FAM',
		data: {
			formal_name: 'FAMILY',
			xref_id: '@F172@',
		},
		children: [
			{
				type: 'RIN',
				data: {
					formal_name: 'REC_ID_NUMBER',
				},
				value: 'MH:F172',
				children: [],
			},
			{
				type: '_UID',
				data: {
					custom_tag: true,
				},
				value: '51A82CE0B25C04D7148022AF5025D348',
				children: [],
			},
			{
				type: '_UPD',
				data: {
					custom_tag: true,
				},
				value: '31 MAY 2013 00:54:08 GMT-5',
				children: [],
			},
			{
				type: 'HUSB',
				data: {
					formal_name: 'HUSBAND',
					pointer: '@I500@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I499@',
				},
				children: [],
			},
			{
				type: 'CHIL',
				data: {
					formal_name: 'CHILD',
					pointer: '@I501@',
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
						value: '51A82CE0B26A54D7248022AF5025D348',
						children: [],
					},
					{
						type: 'RIN',
						data: {
							formal_name: 'REC_ID_NUMBER',
						},
						value: 'MH:FF166',
						children: [],
					},
				],
			},
		],
	},
	{
		type: 'TRLR',
		data: {
			formal_name: 'TRAILER',
		},
		children: [],
	},
]
