class ArrayExtend {
    chunk() {
        Array.prototype.chunk = function(n) {
            let array = this
            let result = []
            for (let i = 0, len = array.length; i < len; i += n) {
                result.push(array.slice(i, i + n))
            }
            return result
        }
    }
    removalRepeat() {
        Array.prototype.removalRepeat = function(key = "") {
            let array = this
            if (isValueList(array)) {
                let result = Array.from(new Set(array))
                return result
            } else {
                let result = []
                let array_ = array
                for (let source of array_) {
                    let list_ = result.filter(
                        target => target[key] === source[key]
                    )
                    if (list_.length === 0) {
                        result.push(source)
                    }
                }
                return result
            }
        }
    }
    init() {
        let keyList = ["chunk", "removalRepeat"]
        for (let key of keyList) {
            if (Array.prototype[key] == null) {
                this[key]()
            }
        }
    }
}

const arrayExtend = new ArrayExtend()

module.exports = arrayExtend
