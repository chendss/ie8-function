var regExpExtend = function() {
    RegExp.dict = {
        数字: /^[0-9]*$/,
        n位的数字: /^\d{n}$/,
        至少n位数字: /^\d{n,}$/,
        非负整数: /^\d+$/,
        整数: /^-?\d+$/,
        手机号: /^1[34578]\d{9}$/,
        包含中文: /[\u4E00-\u9FA5]/,
        网址: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        邮箱: /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/,
        邮箱或者手机: /(^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$)|(^1[3|4|5|8]\d{9}$)/,
        电话号码: /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/,
        邮政编码: /[1-9]\d{5}(?!\d)/,
        手机或者电话: /(^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$)|(^0(10|2[0-5789]|\\d{3})\\d{7,8}$)/,
        身份证: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    }
    RegExp.number = function(str) {
        var re = /^[0-9]*$/
        return re.test(str)
    }
    RegExp.get = function(str, re) {
        str = str || ""
        return str.match(re).join("")
    }
    RegExp.replace = function(str, re) {
        str = str || ""
        return str.replace(re, "")
    }
    RegExp.test = function(str, re) {
        str = str || ""
        return re.test(str + "")
    }
}

module.exports = regExpExtend
