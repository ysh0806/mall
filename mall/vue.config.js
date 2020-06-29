module.exports = {
  configureWebpack: {
    resolve: {
      // 配置后缀
      extensions: [],
      // 配置别名
      alias: {
        // 默认配置过：'@': 'src'
        'assets': 'src/assets',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
        'views': 'src/views'
      }
    }
  }
}