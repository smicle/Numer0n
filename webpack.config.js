const path = require('path')

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',

  target: 'node',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.ts',

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        loader: 'ts-loader',
        // node_modules内も含める
        options: {allowTsInNodeModules: true},
      },
    ],
  },

  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: ['.ts'],
  },

  // 出力先のディレクトリとファイル名
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
