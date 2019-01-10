const path = require("path")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const es3ifyPlugin = require("es3ify-webpack-plugin")

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        properties: false
                    },
                    output: {
                        beautify: true,
                        comments: true
                    },
                    mangle: false,
                    ie8: true
                }
            })
        ]
    },
    plugins: [new es3ifyPlugin()],
    entry: ["babel-polyfill", "object-defineproperty-ie8", "./main.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "ie8-extend.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "es3ify-loader",
                enforce: "post"
            }
        ]
    }
}
