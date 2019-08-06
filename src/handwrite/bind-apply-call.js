// 手写一个bind，apply，call函数
// es6
Function.prototype.bind2 = function(thisObj, ...args) {
    let fun = this
    let resFun = function(...resFunArgs) {
        return fun.apply(this instanceof resFn ? this : thisObj, [...args, ...resFunArgs])
    }
    function tmp() {}
    tmp.prototype = this.prototype;
    resFn.prototype = new tmp();
    return resFun
}
