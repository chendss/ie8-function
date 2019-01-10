Array.prototype.forEach =
    Array.prototype.forEach ||
    function(callback) {
        var list = this
        for (var i = 0; i < list.length; i++) {
            var item = list[i]
            callback(item, i)
        }
    }

Array.prototype.map =
    Array.prototype.map ||
    function(callback) {
        var list = this
        var result = []
        list.forEach(function(item, i) {
            result.push(callback(item, i))
        })
        return result
    }

var ArrayExtend = function() {
    this.extend = ["forEach", "map"]
    this.forEach = function(callback) {
        var list = this
        for (var i = 0; i < list.length; i++) {
            var item = list[i]
            callback(item, i)
        }
    }
    this.map = function(callback) {
        var list = this
        var result = []
        list.forEach(function(item, i) {
            result.push(callback(item, i))
        })
        return result
    }
}

ArrayExtend.prototype.init = function() {
    for (var i = 0; i < this.extend.length; i++) {
        var key = this.extend[i]
        Array.prototype[key] = Array.prototype[key] || this[key]
    }
}

var arrayExtend = new ArrayExtend()
module.exports = arrayExtend
