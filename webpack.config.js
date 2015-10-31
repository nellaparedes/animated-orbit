module.exports = {
    entry: "./src/animated-orbit.js",
    output: {
        path: __dirname,
        filename: "./dist/animated-orbit.js"
    },
    module: {
      loaders: [
        {
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    }
};