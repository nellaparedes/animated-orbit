var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/animated-orbit.js",
    output: {
        path: __dirname,
        filename: "./dist/animated-orbit.js"
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ],
    externals: {
        "foundation": "Foundation",
        "jquery" : "jQuery"
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