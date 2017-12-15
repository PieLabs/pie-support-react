const resolve = require('resolve');

/**
 * We must resolve this preset, because it is resolved within babel-core. So webpack can't help us here.
 */
const reactPresetPath = resolve.sync('babel-preset-react');

module.exports = {
  rules: [
      {
        test: /\.(jsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [reactPresetPath, resolve.sync('babel-preset-env'), resolve.sync('babel-preset-stage-0')]
            }
          }
        ]
      }
  ],
  extensions: ['.jsx']
}
