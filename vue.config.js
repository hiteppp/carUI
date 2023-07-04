// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      'BMap':'BMap' // 百度地图配置
    },

    resolve: {
      fallback: {
        assert: require.resolve('assert/'),
        buffer: require.resolve('buffer/'),
        events: require.resolve('events/'),
        stream: require.resolve('stream-browserify/'),
        util: require.resolve('util/'),
        http: require.resolve('stream-http/'),
        https: require.resolve('https-browserify/'),
        os: require.resolve('os-browserify/browser'),
        tty: require.resolve('tty-browserify'),
        vm: require.resolve('vm-browserify'),
        constants: require.resolve('constants-browserify'),
        process: require.resolve('process/browser'),
        punycode: require.resolve('punycode/'),
        querystring: require.resolve('querystring-es3/'),
        url: require.resolve('url/'),
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        fs: false
      }
    },
    plugins: [
      new NodePolyfillPlugin()
    ]
  }

})

/* module.exports = {
  configureWebpack: {
    externals: {
      'BMap': 'BMap' // 百度地图配置
    }
  }
} */