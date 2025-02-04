import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

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
)
