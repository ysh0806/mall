module.exports = {
  configureWebpack: {
    resolve: {
      // 配置后缀
      extensions: [],
      // 配置别名
      alias: {
        // 默认配置过：'@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}


/*const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => config.resolve.alias
    .set('@', resolve('./src'))
    .set('assets', resolve('./src/assets'))
    .set('common', resolve('./src/common'))
    .set('components', resolve('./src/components'))
    .set('network', resolve('./src/network'))
    .set('views', resolve('./src/views'))
}*/
