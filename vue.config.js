module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/comment',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
        
      }
    }
  }
}