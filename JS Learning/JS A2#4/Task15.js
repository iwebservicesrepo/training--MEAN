//a
const strArr = ["Hi", "Hello", "Bye"];
let newArr = strArr.reduce(function (acc, curr) {
  return acc + "::" + curr;
});
console.log(newArr);
//b
let sum = strArr.reduce(function (acc, curr) {
  return acc + curr.length;
}, 0);
console.log(sum);
//c
let first = strArr.reduce(function (acc, curr) {
  return acc + curr[0];
}, "");
console.log(first);
