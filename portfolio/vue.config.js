const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : '/portfolio1/',
  // indexPath: '../dist/index.html',
  outputDir : 'build'
})
