javascript
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/yandex_practicum/' : '/',
  
    chainWebpack: (config) => {
       config.module
         .rule('mp4')
         .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
         .use('file-loader')
         .loader('file-loader')
         .options({
           name: 'media/[name].[hash:8].[ext]'
         })
         .end();
     },
  }