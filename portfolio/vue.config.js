const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : '/portfolio1'
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import "@/assets/scss/default.scss";`
  //     }
  //   }
  // }
})
