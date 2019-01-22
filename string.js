var es6StringApi = function() {
    if (!String.prototype.includes) {
        String.prototype.includes = function(str) {
            var returnValue = false
            if (this.indexOf(str) !== -1) {
                returnValue = true
            }
            return returnValue
        }
    }
}

var stringExtend = function() {
    // 字符串格式化，替换掉字符串里的｛｝为变量
    String.prototype.format = function() {
        var str = this.toString()
        var isConversion = str.includes("{}")
        if (isConversion) {
            for (var i = 0; i < arguments.length; i++) {
                str = str.replace("{}", arguments[i])
            }
        }
        return str
    }
}

module.exports = {
    es6: es6StringApi,
    extend: stringExtend
}
