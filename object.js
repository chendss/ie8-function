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
    Object.forEach = function(obj, hander) {
        Object.keys(obj).forEach(function(key) {
            hander(key, obj[key])
        })
    }
    // 对象的map函数，hander处理返回一个{key,value}对象，如果缺失key键，那么默认使用原来的key，value亦然
    Object.map = function(obj, hander) {
        var result = {}
        Object.keys(obj).forEach(function(key) {
            var item = hander(key, obj[key])
            var newKey = item.key || key
            var value = item.value || obj[key]
            result[newKey] = value
        })
        return result
    }
    Object.filter = function(obj, hander) {
        var result = {}
        Object.keys(obj).forEach(function(key) {
            if (hander(key, obj[key])) {
                result[key] = obj[key]
            }
        })
        return result
    }
}

module.exports = {
    es6: es6ObjectApi,
    extend: objectExtend
}
