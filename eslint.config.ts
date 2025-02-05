import globals from 'globals'

import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: '.',
			},
			globals: {
				...globals.node,
			},
		},
	},
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	{
		rules: {
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					disallowTypeAnnotations: false,
					fixStyle: 'separate-type-imports',
					prefer: 'type-imports',
				},
			],
		},
	},
	prettierConfig,
	prettierPlugin,
	{
		plugins: {
			'unused-imports': unusedImportsPlugin,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^node', 'globals'],
						['^@eslint', '^eslint', 'typescript-eslint'],
						['^@?\\w'],
						['^[./]'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
		},
	},
)
