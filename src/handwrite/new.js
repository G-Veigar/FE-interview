// 手写一个函数，实现new操作符的功能
// es6
function newFun(func, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, func.prototype)
    let res = func.apply(obj, args)
    return res instanceof Object ? res : obj
}
// es5
function newFun(func) {
    let obj = Object.create(func.prototype)
    let args = Array.prototype.slice.call(arguments, 1)
    res = func.apply(obj, args)
    return res instanceof Object ? res : obj
}

function func(name='aaa', age=20) {
    this.name = name
    this.age = age
}

func.prototype.sayName = function() {
    console.log(this.name)
}

let a = new func('a', 20)
let b = newFun(func, 'b', 20)

let a2 = new func()
let b2 = newFun(func)

// console.log(a, b)
console.log(a2, b2)
// a.sayName()
// b.sayName()