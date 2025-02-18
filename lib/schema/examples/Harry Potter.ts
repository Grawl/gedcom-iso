import type { Child, Family } from '#lib/schema/family'
import type { Individual } from '#lib/schema/individual'
import type { Tree } from '#lib/schema/root'

const ArcturusBlack: Individual = {
	type: 'INDI',
	data: {
		formal_name: 'INDIVIDUAL',
		xref_id: '@I00049@',
	},
	children: [
		{
			type: 'NAME',
			data: {
				formal_name: 'NAME',
			},
			value: 'Arcturus /Black/',
			children: [],
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
					type: 'DATE',
					data: {
						formal_name: 'DATE',
					},
					value: '1884',
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
					type: 'DATE',
					data: {
						formal_name: 'DATE',
					},
					value: '1959',
					children: [],
				},
			],
		},
		{
			type: 'FAMS',
			data: {
				formal_name: 'FAMILY_SPOUSE',
				pointer: '@F00020@',
			},
			children: [],
		},
		{
			type: 'FAMC',
			data: {
				formal_name: 'FAMILY_CHILD',
				pointer: '@F00023@',
			},
			children: [],
		},
	],
}

const child: Child = {
	type: 'CHIL',
	data: {
		formal_name: 'CHILD',
		pointer: '@I00001@',
	},
	children: [
		{
			type: '_FREL',
			data: {
				custom_tag: true,
			},
			value: 'Natural',
			children: [],
		},
		{
			type: '_MREL',
			data: {
				custom_tag: true,
			},
			value: 'Natural',
			children: [],
		},
	],
}

const family: Family = {
	type: 'FAM',
	data: {
		formal_name: 'FAMILY',
		xref_id: '@F00001@',
	},
	children: [
		{
			type: 'HUSB',
			data: {
				formal_name: 'HUSBAND',
				pointer: '@I00002@',
			},
			children: [],
		},
		{
			type: 'WIFE',
			data: {
				formal_name: 'WIFE',
				pointer: '@I00003@',
			},
			children: [],
		},
		child,
	],
}

const potteriana: Tree = {
	type: 'root',
	children: [
		{
			type: 'HEAD',
			data: {
				formal_name: 'HEADER',
			},
			children: [
				{
					type: 'SOUR',
					data: {
						formal_name: 'SOURCE',
					},
					value: 'FTM',
					children: [
						{
							type: 'VERS',
							data: {
								formal_name: 'VERSION',
							},
							value: 'Family Tree Maker (17.0.0.559)',
							children: [],
						},
						{
							type: 'NAME',
							data: {
								formal_name: 'NAME',
							},
							value: 'Family Tree Maker for Windows',
							children: [],
						},
						{
							type: 'CORP',
							data: {
								formal_name: 'CORPORATE',
							},
							value: 'The Generations Network',
							children: [
								{
									type: 'ADDR',
									data: {
										formal_name: 'ADDRESS',
									},
									value: '360 W 4800 N\\nProvo, UT 84604',
									children: [],
								},
								{
									type: 'PHON',
									data: {
										formal_name: 'PHONE',
									},
									value: '(801) 705-7000',
									children: [],
								},
							],
						},
					],
				},
				{
					type: 'DEST',
					data: {
						formal_name: 'DESTINATION',
					},
					value: 'FTM',
					children: [],
				},
				{
					type: 'DATE',
					data: {
						formal_name: 'DATE',
					},
					value: '11 DEC 2007',
					children: [],
				},
				{
					type: 'CHAR',
					data: {
						formal_name: 'CHARACTER',
					},
					value: 'ANSI',
					children: [],
				},
				{
					type: 'FILE',
					data: {
						formal_name: 'FILE',
					},
					value:
						'C:\\\\Documents and Settings\\\\socrtwo\\\\Desktop\\\\Harry-Potter-Family-Tree_2007-12-12.ged',
					children: [],
				},
				{
					type: 'SUBM',
					data: {
						formal_name: 'SUBMITTER',
						pointer: '@SUBM@',
					},
					children: [],
				},
				{
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
				},
			],
		},
		{
			type: 'SUBM',
			data: {
				formal_name: 'SUBMITTER',
				xref_id: '@SUBM@',
			},
			children: [],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00001@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Harry /Potter/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00006@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00001@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00071@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: '/Black/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00026@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00084@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Alphard /Black/',
					children: [],
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
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'Gave gold to his runaway nephew.',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00027@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00098@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Andromeda /Black/',
					children: [],
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
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'Married Muggle Tom Tonks',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00037@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00029@',
					},
					children: [],
				},
			],
		},
		ArcturusBlack,
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00088@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Arcturus /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1901',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1991',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00031@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00030@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00097@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Bellatrix /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1951',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1998',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00036@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00029@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00061@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Belvina /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1886',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1962',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00024@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00023@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00051@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Callidora /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1915',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00022@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00020@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00077@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Cassiopeia /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1915',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1992',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00025@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00036@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Cedrella /Black/',
					children: [],
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
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'Married Sepimus Weasley',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00012@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00020@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00052@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Charis /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1919',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1973',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00021@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00020@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00062@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Cygnus /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1889',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1943',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00025@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00023@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00085@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Cygnus /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1929',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1979',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00029@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00027@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00079@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Dorea /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1920',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1977',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00028@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00025@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00074@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Elladora /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1850',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1931',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00026@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00072@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Isla /Black/',
					children: [],
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
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'Married Bob Hitchens',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00041@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00026@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00092@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Lucretia /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1925',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1992',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00033@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00031@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00089@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Lycoris /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1904',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1965',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00030@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00078@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Marius /Black/',
					children: [],
				},
				{
					type: 'SEX',
					data: {
						formal_name: 'SEX',
					},
					value: 'U',
					children: [],
				},
				{
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'A Squib',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00025@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00099@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Narcissa /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1955',
							children: [],
						},
					],
				},
				{
					type: 'ALIA',
					data: {
						formal_name: 'ALIAS',
					},
					value: 'Cissy',
					children: [],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00034@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00029@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00093@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Orion /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1929',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1979',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00032@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00031@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00063@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Phineas /Black/',
					children: [],
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
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'Supported Muggle Rights',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00023@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00060@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Phineas Nigellus /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1847',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1925',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00023@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00026@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00076@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Pollux /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1912',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1990',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00027@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00025@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00090@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Regulus /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1906',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1959',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00030@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00095@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Regulus /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1961',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1979',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00032@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00064@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Sirius /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1877',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1952',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00030@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00023@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00075@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Sirius /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1843',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1853',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00026@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00094@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Sirius /Black/',
					children: [],
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
					type: 'EVEN',
					data: {
						formal_name: 'EVENT',
					},
					value: 'Ran Away',
					children: [
						{
							type: 'TYPE',
							data: {
								formal_name: 'TYPE',
							},
							value: 'Tree Removal Reaon If Applicable',
							children: [],
						},
					],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00032@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00083@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Walburga /Black/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1925',
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1985',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00032@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00027@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00069@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Violetta /Bulstrode/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00025@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00068@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Female /Burke/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00024@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00065@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Herbert /Burke/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00024@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00066@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Male /Burke/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00024@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00067@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Male /Burke/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00024@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00080@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Irma /Crabbe/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00027@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00053@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Caspar /Crouch/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00021@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00055@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Female /Crouch/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00021@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00056@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Female /Crouch/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00021@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00054@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mollie /Crouch/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00021@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00033@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Apolline /Delacour/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00011@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00029@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Fleur /Delacour/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00010@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00011@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00034@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Gabrielle /Delacour/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00011@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00032@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Monsieur /Delacour/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00011@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00010@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Dudley /Dursley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00004@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00011@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mr. /Dursley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00005@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00012@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mrs. /Dursley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00005@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00009@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Vernon /Dursley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00004@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00005@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00003@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Lilly /Evan/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00001@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00003@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00006@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mr. /Evans/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00003@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00007@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mrs. /Evans/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00003@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00008@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Petunia /Evans/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00004@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00003@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00039@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Peverell /Family/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00015@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00070@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ursula /Flint/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00023@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00087@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Hesper /Gamp/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00030@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00044@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Marvolo /Gaunt/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00018@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00017@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00046@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Merope /Gaunt/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00019@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00018@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00045@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Morfin /Gaunt/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00018@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00025@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Hermione /Granger/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00008@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00073@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Bob /Hitchens/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00041@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00026@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00103@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Rodolphus /Lestrange/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00036@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00059@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Female /Longbottom/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00022@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00057@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Harfang /Longbottom/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00022@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00058@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Male /Longbottom/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00022@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00106@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Remus /Lupin/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00038@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00107@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ted /Lupin/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00038@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00091@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Melania /Macmillan/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00031@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00101@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Draco /Malfoy/',
					children: [],
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
							type: 'DATE',
							data: {
								formal_name: 'DATE',
							},
							value: '1980',
							children: [],
						},
					],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00035@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00034@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00100@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Lucius /Malfoy/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00034@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00102@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Scorpius /Malfoy/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00035@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00041@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Antioch /Peverell/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00015@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00040@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Cadmus /Peverell/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00016@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00015@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00038@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ignotus /Peverell/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00014@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00015@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00042@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Many Generations /Peverell/',
					children: [],
				},
				{
					type: 'SEX',
					data: {
						formal_name: 'SEX',
					},
					value: 'U',
					children: [],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00017@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00016@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00015@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Albus /Potter/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00006@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00081@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Charlus /Potter/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00028@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00002@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'James /Potter/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00001@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00002@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00014@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'James /Potter/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00006@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00016@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Lily /Potter/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00006@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00082@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Male /Potter/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00028@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00037@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Many Generations /Potter/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00013@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00014@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00004@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mr. /Potter/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00002@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00013@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00005@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Mrs. /Potter/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00002@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00108@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: '/Prewett/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00039@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00112@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Fabian /Prewett/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00040@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00110@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Female /Prewett/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00040@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00111@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Gideon /Prewett/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00040@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00096@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ignatius /Prewett/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00033@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00039@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00109@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Male /Prewett/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00040@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00039@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00017@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Molly /Prewett/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00007@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00040@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00048@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Tom Marvolo /Riddle/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00019@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00047@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Tom /Riddle/ Sr.',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00019@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00086@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Druella /Rosier/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00029@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00043@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Many Generations /Slytherin/',
					children: [],
				},
				{
					type: 'SEX',
					data: {
						formal_name: 'SEX',
					},
					value: 'U',
					children: [],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00017@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00042@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00114@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Salazar /Slytherin/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00042@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00105@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Nymphadora /Tonks/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00038@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00037@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00104@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ted /Tonks/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00037@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00018@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Arthur /Weasley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00007@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00012@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00113@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Bilius /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00012@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00023@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Charles /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00021@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Fred /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00028@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Fred /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00009@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00020@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'George /Weasley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00009@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00013@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ginevra /Weasley/',
					children: [],
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
					type: 'ALIA',
					data: {
						formal_name: 'ALIAS',
					},
					value: 'Ginny',
					children: [],
				},
				{
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00006@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00027@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Hugo /Weasley/',
					children: [],
				},
				{
					type: 'SEX',
					data: {
						formal_name: 'SEX',
					},
					value: 'U',
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00008@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00031@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Other Children /Weasley/',
					children: [],
				},
				{
					type: 'SEX',
					data: {
						formal_name: 'SEX',
					},
					value: 'U',
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00010@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00022@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Percy /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00019@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Ronald /Weasley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00008@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00026@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Rose /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00008@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00035@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Septimus /Weasley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00012@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00030@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Victoire /Weasley/',
					children: [],
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
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00010@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00024@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'William /Weasley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00010@',
					},
					children: [],
				},
				{
					type: 'FAMC',
					data: {
						formal_name: 'FAMILY_CHILD',
						pointer: '@F00007@',
					},
					children: [],
				},
			],
		},
		{
			type: 'INDI',
			data: {
				formal_name: 'INDIVIDUAL',
				xref_id: '@I00050@',
			},
			children: [
				{
					type: 'NAME',
					data: {
						formal_name: 'NAME',
					},
					value: 'Lysandra /Yaxley/',
					children: [],
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
					type: 'FAMS',
					data: {
						formal_name: 'FAMILY_SPOUSE',
						pointer: '@F00020@',
					},
					children: [],
				},
			],
		},
		family,
		{
			type: 'FAM',
			data: {
				formal_name: 'FAMILY',
				xref_id: '@F00002@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00004@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00005@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00002@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00003@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00006@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00007@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00003@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00008@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00004@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00009@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00008@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00010@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00005@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00011@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00012@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00009@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00006@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00001@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00013@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00014@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00015@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00016@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00007@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00018@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00017@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00013@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00019@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00020@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00021@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00022@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00023@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00024@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00008@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00019@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00025@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00026@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00027@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00009@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00020@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00028@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00010@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00024@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00029@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00030@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00031@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00011@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00032@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00033@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00029@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00034@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00012@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00035@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00036@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00018@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00113@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00013@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00037@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00004@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00014@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00038@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00037@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00015@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00039@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00038@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00040@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00041@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00016@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00040@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00042@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00017@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00042@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00043@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00044@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00018@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00044@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00045@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00046@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00019@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00047@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00046@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00048@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00020@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00049@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00050@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00036@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00051@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00052@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00021@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00053@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00052@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00054@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00055@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00056@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00022@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00057@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00051@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00058@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00059@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00023@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00060@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00070@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00049@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00061@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00062@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00063@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00064@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00024@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00065@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00061@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00066@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00067@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00068@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00025@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00062@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00069@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00076@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00077@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00078@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00079@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00026@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00071@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00060@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00072@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00073@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00074@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00075@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00027@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00076@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00080@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00083@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00084@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00085@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00028@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00081@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00079@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00082@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00029@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00085@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00086@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00097@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00098@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00099@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00030@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00064@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00087@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00088@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00089@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00090@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00031@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00088@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00091@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00092@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00093@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00032@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00093@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00083@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00094@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00095@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00033@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00096@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00092@',
					},
					children: [],
				},
			],
		},
		{
			type: 'FAM',
			data: {
				formal_name: 'FAMILY',
				xref_id: '@F00034@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00100@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00099@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00101@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00035@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00101@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00102@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00036@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00103@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00097@',
					},
					children: [],
				},
			],
		},
		{
			type: 'FAM',
			data: {
				formal_name: 'FAMILY',
				xref_id: '@F00037@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00104@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00098@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00105@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00038@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00106@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00105@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00107@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00039@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00108@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00096@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00109@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00040@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00109@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00110@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00017@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00111@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
					],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00112@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
							children: [],
						},
						{
							type: '_MREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
				xref_id: '@F00041@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00073@',
					},
					children: [],
				},
				{
					type: 'WIFE',
					data: {
						formal_name: 'WIFE',
						pointer: '@I00072@',
					},
					children: [],
				},
			],
		},
		{
			type: 'FAM',
			data: {
				formal_name: 'FAMILY',
				xref_id: '@F00042@',
			},
			children: [
				{
					type: 'HUSB',
					data: {
						formal_name: 'HUSBAND',
						pointer: '@I00114@',
					},
					children: [],
				},
				{
					type: 'CHIL',
					data: {
						formal_name: 'CHILD',
						pointer: '@I00043@',
					},
					children: [
						{
							type: '_FREL',
							data: {
								custom_tag: true,
							},
							value: 'Natural',
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
	],
}
