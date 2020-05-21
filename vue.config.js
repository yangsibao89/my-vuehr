module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        ws: false,
        target: 'http://localhost:8083',
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    config.devtool = 'source-map'
  }
}
