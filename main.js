var arrayDict = require("./array")
var objectDict = require("./object")
var stringDict = require("./string")

var polyfillInit = function() {
    var dictList = [arrayDict, objectDict, stringDict]
    for (var i = 0; i < dictList.length; i++) {
        var dict = dictList[i]
        dict.es6()
    }
    for (var i = 0; i < dictList.length; i++) {
        var dict = dictList[i]
        dict.extend()
    }
}

polyfillInit()
