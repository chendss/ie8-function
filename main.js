var arrayDict = require("./array")
var objectDict = require("./object")
var stringDict = require("./string")
var stringDict = require("./string")
var regExpDict = require("./regExp")
var httpDict = require("./httpTools")
var toolsDict = require("./tools")

var polyFillInit = function() {
    var dictList = [
        arrayDict,
        objectDict,
        stringDict,
        regExpDict,
        httpDict,
        toolsDict
    ]
    for (var i = 0; i < dictList.length; i++) {
        var dict = dictList[i]
        if (dict.es6) {
            dict.es6()
        }
    }
    for (var i = 0; i < dictList.length; i++) {
        var dict = dictList[i]
        if (!dict.extend) {
            dict()
        } else {
            dict.extend()
        }
    }
}

polyFillInit()
