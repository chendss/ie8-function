var json3 = require("json3")

var toolsInit = function() {
    window.$Tools = {
        deepCopy: function(obj) {
            return json3.parse(json3.stringify(obj))
        }
    }
}

module.exports = toolsInit
