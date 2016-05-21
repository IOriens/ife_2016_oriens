# 问题记录
## ie11不兼容 `for..of`语句
# 知识点
## `let`的用法
### let vs var
When used inside a block, let limits the variable's scope to that block. Note the difference between var whose scope is inside the function where it is declared.
```js
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1
```
### let in loops
You can use the let keyword to bind variables locally in the scope of loops instead of using a global variable (defined using var) for that.
```js
for (let i = 0; i<10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i is not defined
```
