var es6ArrayApi = function() {
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(str) {
            var list = this
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                if (item === str) {
                    return true
                }
            }
            return false
        }
    }
    if (!Array.prototype.slice) {
        Array.prototype.slice = function(begin, end) {
            end = end || this.length
            if (Object.prototype.toString.call(this) === "[object Array]") {
                return _slice.call(this, begin, end)
            }
            var i,
                cloned = [],
                size
            var len = this.length
            var start = begin || 0
            start = start >= 0 ? start : Math.max(0, len + start)
            var upTo = typeof end == "number" ? Math.min(end, len) : len
            if (end < 0) {
                upTo = len + end
            }
            size = upTo - start
            if (size > 0) {
                cloned = new Array(size)
                if (this.charAt) {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this.charAt(start + i)
                    }
                } else {
                    for (i = 0; i < size; i++) {
                        cloned[i] = this[start + i]
                    }
                }
            }
            return cloned
        }
    }
    if (!Array.prototype.findIndex) {
        Array.prototype.findIndex = function(hander) {
            var list = this
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                if (hander(item, i)) {
                    return i
                }
            }
            return -1
        }
    }
    if (!Array.prototype.find) {
        Array.prototype.find = function(hander) {
            var list = this
            var index = list.findIndex(hander)
            return index === -1 ? null : list[index]
        }
    }
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(hander) {
            var list = this
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                hander(item, i)
            }
        }
    }
    if (!Array.prototype.every) {
        Array.prototype.every = function(hander) {
            var list = this
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                if (!hander(item, i)) {
                    return false
                }
            }
            return true
        }
    }
    if (!Array.prototype.some) {
        Array.prototype.some = function(hander) {
            var list = this
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                if (hander(item, i)) {
                    return true
                }
            }
            return false
        }
    }
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(hander) {
            var list = this
            var result = []
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                if (hander(item, i)) {
                    result.push(item)
                }
            }
            return result
        }
    }
    if (!Array.prototype.map) {
        Array.prototype.map = function(hander) {
            var list = this
            var result = []
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                result.push(hander(item, i))
            }
            return result
        }
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/) {
            var len = this.length >>> 0
            var from = Number(arguments[1]) || 0
            from = from < 0 ? Math.ceil(from) : Math.floor(from)
            if (from < 0) from += len
            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from
            }
            return -1
        }
    }
}

var arrayExtend = function() {
    Array.prototype.unique = function() {
        var sortedArray = this.concat().sort()
        var seen,
            result = []
        for (var i = 0, len = sortedArray.length; i < len; i++) {
            if (!i || seen !== sortedArray[i]) {
                result.push(sortedArray[i])
            }
            seen = sortedArray[i]
        }
        return result
    }
    Array.prototype.includesPro = function(val, key) {
        var list = this
        if (key == null) {
            return list.includes(val)
        } else {
            var index = list.findIndex(function(item) {
                return item[key] === val
            })
            return index !== -1
        }
    }
    Array.prototype.sum = function() {
        var list = this
        var result = 0
        list.forEach(function(i) {
            result += i
        })
        return result
    }
    Array.prototype.average = function() {
        var list = this
        var n = list.length
        var sum = 0
        list.forEach(function(i) {
            sum += i
        })
        var result = sum / n
        return result
    }
    Array.prototype.chunk = function(n) {
        var list = this
        var result = []
        for (var i = 0, len = list.length; i < len; i += n) {
            result.push(list.slice(i, i + n))
        }
        return result
    }
    Array.prototype.nth = function(index) {
        var list = this
        var length = list.length
        if (index >= 0) {
            return list[index]
        } else {
            var index_ = length - Math.abs(index)
            return list[index_]
        }
    }
    Array.arrayDefault = function(n, item) {
        item = item || null
        var result = []
        for (var i = 0; i < n; i++) {
            result.push(item)
        }
        return result
    }
    Array.range = function(n) {
        var result = []
        for (var i = 0; i < n; i++) {
            result.push(i)
        }
        return result
    }
}

module.exports = {
    es6: es6ArrayApi,
    extend: arrayExtend
}
