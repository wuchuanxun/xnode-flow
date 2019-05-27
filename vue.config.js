module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: './examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
    },
  },
  devServer:{
    open: false,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: null
  },
  
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}