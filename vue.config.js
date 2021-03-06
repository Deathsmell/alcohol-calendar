// eslint-disable-next-line @typescript-eslint/no-var-requires
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
      }),
    ],
    output: {
      libraryExport: 'default',
    },
  },
}
