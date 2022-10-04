module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'], // 继承过来的规则
  rules: {
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
    'no-extra-semi': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/newline-after-import': 0,
    'import/no-mutable-exports': 0,
    'import/no-absolute-path': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-amd': 0,
    'import/first': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-named-default': 0,
    'global-require': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'class-methods-use-this': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', {'allowEmptyCatch': true}],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'curly': 'error'
  }
};
