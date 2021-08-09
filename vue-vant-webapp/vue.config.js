module.exports = {
  devServer: {
    // host: '10.36.138.28',  // localhost
    port: 8001,
    open: true,
    proxy: {
      '/api': {
        target: 'http://10.36.138.28:8888',
        changeOrigin: true
      }
    }
  }
}
