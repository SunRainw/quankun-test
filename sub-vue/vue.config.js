const { defineConfig } = require('@vue/cli-service');
// const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 7001
  },
  // alias: {
  //   '@': path.resolve(__dirname, './src')
  // },
  configureWebpack: {

    output: {
      library: 'sub-vue',
      libraryTarget: 'umd',

    }
  },
  publicPath: "//localhost:7001/",

});
