module.exports = {
  // Konfigurasi lainnya
  module: {
    rules: [
      // Aturan lainnya
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "html-loader",
      },
    ],
  },
}
