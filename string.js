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

var stringExtend = function() {}

module.exports = {
    es6: es6StringApi,
    extend: stringExtend
}
