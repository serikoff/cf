module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	extends: ['airbnb', 'prettier'],
	plugins: ['react', 'import', 'jsx-a11y'],
	rules: {
		// Next imports React into pages automatically
		'react/react-in-jsx-scope': 'off',
		// Next includes packages like MDX using their bundle
		'import/no-extraneous-dependencies': 'off',
		indent: 'off',
		'no-tabs': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'no-console': 'off',
		'import/no-unresolved': 'off',
		'no-shadow': 1,
		'no-nested-ternary': 1,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/prop-types': 0,
		'react/require-default-props': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'no-else-return': 0,
		'one-var': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/jsx-filename-extension': 0,
		'no-unused-vars': 0,
		'react/destructuring-assignment': 1,
		'no-case-declarations': 0,
		'no-unused-expressions': 0,
		'react/jsx-props-no-spreading': 0,
		'arrow-body-style': 0,
		'react/jsx-curly-brace-presence': 0,
		'class-methods-use-this': 0,
		'prefer-arrow-callback': 0,
		'import/extensions': 0,
		'react/button-has-type': 0,
		'jsx-a11y/control-has-associated-label': 1,
		'jsx-a11y/media-has-caption': 1,
		'jsx-a11y/label-has-associated-control': 1,
		'import/prefer-default-export': 0,
		'no-use-before-define': 0,
		'max-classes-per-file': 0,
		camelcase: 0,
		'react/jsx-no-target-blank': 1,
		'spaced-comment': 0,
	},
};
