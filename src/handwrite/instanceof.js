function instanceOfFun(a, B) {
    let proto = a.__proto__
    let prototype = B.prototype
    while(true) {
        if(proto === prototype) return true
        if(!proto) return false
        proto = proto.__proto__
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHi = function () {
    console.log(`hi, I'm ${this.name}, ${this.age} years old`)
};

let a = {}

let b = new Person('Bob', 22)

console.log(a instanceof Person, b instanceof Person)

console.log(instanceOfFun(a, Person), instanceOfFun(b, Person))
