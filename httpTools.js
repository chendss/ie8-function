window.HttpTools = function() {}

var httpInit = function() {
    HttpTools.query = function() {
        var queryStr = window.location.href.split("?")[1]
        if (!queryStr) return ""
        var queryList = queryStr.split("&")
        var result = function() {
            var obj = {}
            queryList.forEach(function(str) {
                var key = str.split("=")[0]
                var value = str.split("=")[1]
                obj[key] = value
            })
            return obj
        }
        return result
    }
    HttpTools.queryStr = function(obj) {
        var result = []
        Object.forEach(obj, function(key, value) {
            result.push("{}={}".format(key, value))
        })
        return result.join("&")
    }
}

module.exports = httpInit
