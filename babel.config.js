module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)

  let cfg = ['@babel/preset-env', { bugfixes: true }]
  if (process.env.NODE_ENV === 'test') {
    cfg = [
      '@babel/preset-env',
      {
        targets: {
          node: 8,
        },
      },
    ]
  }
  return {
    presets: [cfg, '@babel/preset-react'],
    plugins: [
      [
        '@babel/plugin-transform-typescript',
        {
          isTSX: true,
          allowNamespaces: true,
          onlyRemoveTypeImports: true,
          allowDeclareFields: true,
        },
      ],
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
    ],
  }
}
