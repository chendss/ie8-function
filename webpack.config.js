var path = require("path")

module.exports = {
    mode: "development",
    entry: ["./main.js"],
    output: {
        path: path.join(__dirname, "./dict/"),
        filename: "ie8-extend.js"
    }
}
