const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'prodcution'?'portfolio1':'/'
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import "@/assets/scss/default.scss";`
  //     }
  //   }
  // }
})

