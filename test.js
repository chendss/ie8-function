var arrayTest = function() {
    console.log([1, 2, 3].includes(1))
    console.log([1, 2, 3].slice(0, 1))
    console.log(
        [1, 2, 3].findIndex(function(i) {
            return i === 1
        })
    )
    console.log(
        [1, 2, 3].find(function(i) {
            return i === 1
        })
    )
    ;[1, 2, 3].forEach(function(i) {
        console.log(i)
    })
    ;[1, 2, 3].every(function(i) {
        return i > 2
    })
    ;[1, 2, 3].some(function(i) {
        return i > 2
    })
    ;[1, 2, 3].filter(function(i) {
        return i > 1
    })
    console.log([1, 1, 1].unique(), "去重")
}
