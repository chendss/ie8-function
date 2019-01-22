var arrayTest = function() {
    console.log("array.includes", [1, 2, 3].includes(1))
    console.log("array.splice", [1, 2, 3].slice(0, 1))
    console.log(
        "array.findIndex",
        [1, 2, 3].findIndex(function(i) {
            return i === 1
        })
    )
    console.log(
        "array.find",
        [1, 2, 3].find(function(i) {
            return i === 1
        })
    )
    ;[1, 2, 3].forEach(function(i) {
        console.log("array.forEach", i)
    })
    ;[1, 2, 3].every(function(i) {
        console.log("array.every", i)
        return i > 2
    })
    ;[1, 2, 3].some(function(i) {
        console.log("array.some", i)
        return i > 2
    })
    ;[1, 2, 3].filter(function(i) {
        console.log("array.filter", i)
        return i > 1
    })
    console.log([1, 1, 1].unique(), "array.unique")
    console.log("array.range", Array.range(5))
    console.log("array.arrayDefault", Array.arrayDefault(5, "a"))
}

var stringTest = function() {
    console.log("string.includes", "fuck".includes("1"))
    console.log("string.format", "{dd}{}".format("成功"))
}

var objectTest = function() {
    console.log(
        "Object.map",
        Object.map({ fuck: 1, sss: 1 }, function(key, value) {
            return { key: "ttt" + key }
        })
    )
    console.log(
        "Object.filter",
        Object.filter({ fuck: 1, sss: 1 }, function(key) {
            return key === "fuck"
        })
    )
    console.log("Object.values", Object.values({ fuck: 1, sss: 1 }))
    Object.forEach({ fuck: 1, sss: 1 }, function(key) {
        console.log("Object.forEach", key)
    })
}

var testMain = function() {
    arrayTest()
    stringTest()
    objectTest()
}

testMain()
