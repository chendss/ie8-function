var es6ObjectApi = function() {
    if (!Object.keys) {
        Object.keys = function(obj) {
            if (obj !== Object(obj)) {
                throw new TypeError("Object.keys called on a non-object")
            }
            var result = []
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    result.push(key)
                }
            }
            return result
        }
    }
}

var objectExtend = function() {
    Object.values = function(obj) {
        var keys = Object.keys(obj)
        return keys.map(function(key) {
            return obj[key]
        })
    }
}

module.exports = {
    es6: es6ObjectApi,
    extend: objectExtend
}
