module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['add', 'mod', 'del', 'merge', 'fix', 'style', 'test', 'revert', 'refactor', 'docs']
    ]
  }
}
