const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  // 入口文件
  entry: './src/index.tsx',

  // 打包输出文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  // 资源管理
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({  // 按需加载antd样式
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            })]
          })
        },
        exclude: /node_modules/
      },
      { // less
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true // 是否处理js内样式
              }
            }
          }
        ]
      },
      { // 图片
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        exclude: /node_modules/
      },
      { // 字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  // 开发环境中显示源代码的配置
  devtool: 'inline-source-map',

  // 开发环境服务器
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true, // 热模块替换
    open: true,
    proxy: [
      {
        context: [
          '/tenant/**',
          '/notify/**',
          '/frontend/**',
          '/kb/**',
          '/cmdb/**',
          '/automation/**',
          '/monitor/**',
          '/ufs/**',
          '/uyun-base/**'
        ],
        target: 'http://10.1.60.101',
        secure: false
      },
      {
        context: ['/api/v2/**'],
        target: 'http://10.1.60.101/itsm',
        secure: false
      }
    ]
  },

  // 插件
  plugins: [
    // 清理之前的打包文件
    new CleanWebpackPlugin(['dist']),
    // 自动生成html
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 热模块替换
    new webpack.HotModuleReplacementPlugin()
  ]
}
