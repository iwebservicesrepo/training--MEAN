const arr = [
  { name: "Mark", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Mary", age: 25 },
  { name: "Bill", age: 34 },
];
//a
let sumAge = arr.reduce(function (acc, curr) {
  return acc + curr.age;
}, 0);
console.log(sumAge);
//b
let count = 0;
let age = arr.reduce(function (acc, curr) {
  if (curr.age > 27) {
    count++;
  }
}, 0);
console.log(count);
//c
let youngest = arr.reduce(function (acc, curr) {
  if (acc.age > curr.age) {
    return curr;
  } else return acc;
});
console.log(youngest);
//d
let oldest = arr.reduce(function (acc, curr) {
  if (acc.age > curr.age) {
    return acc;
  } else return curr;
});
console.log(oldest);
//e
let count1 = 0;
let name = arr.reduce(function (acc, curr) {
  if (curr.name[0] == "M") {
    count1++;
  }
}, 0);
console.log(count1);
