# 在手写原生代码中感悟到的一些js小技巧

## 设置一个对象的原型对象
将b设置为a的原型对象

1. Object.create
兼容性好，用于新创建对象并设置原型

```javascript
let a = Object.create(b)
```

2. Object.setPrototypeOf
Object.setPrototypeOf是es6语法，需要考虑兼容性
可以用于设置已存在的对象的原型

```javascript
let a = {}
Object.setPrototypeOf(obj, B.prototype)
```

3. 设置__proto__为构造函数的prototype
__proto__其实是非标准用法

```javascript
let a = {}
a.__proto__ = B.prototype
```