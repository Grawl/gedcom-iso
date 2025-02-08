import globals from 'globals'

import ESLint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import ESLintPluginImportX from 'eslint-plugin-import-x'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import {
	config as TypeScriptESLintConfig,
	configs as TypeScriptESLintConfigs,
} from 'typescript-eslint'

export default TypeScriptESLintConfig(
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
	ESLint.configs.recommended,
	TypeScriptESLintConfigs.strictTypeChecked,
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
	{
		files: ['**/*.test.ts'],
		rules: {
			'@typescript-eslint/no-floating-promises': 'off',
		},
	},
	prettierConfig,
	prettierPlugin,
	ESLintPluginImportX.flatConfigs.recommended,
	ESLintPluginImportX.flatConfigs.warnings,
	ESLintPluginImportX.flatConfigs.typescript,
	{
		files: ['**/*.ts'],
		rules: {
			'no-unused-vars': 'off',
			'import-x/newline-after-import': 'warn',
			'import-x/no-rename-default': 'off',
		},
	},
	{
		files: ['**/*.ts'],
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
		files: ['**/*.ts'],
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
