//a
const arr = [1, 2, 11, 3, 12, 4, 5, 15];
let sum = arr.reduce(function (acc, curr) {
  return acc + curr;
});
console.log(sum);
//b
let product = arr.reduce(function (acc, curr) {
  return acc * curr;
});
console.log(product);
//c
let max = arr.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else return curr;
});
console.log(max);
//d
let min = arr.reduce(function (acc, curr) {
  if (acc > curr) {
    return curr;
  } else return acc;
});
console.log(min);
//e
let count = 0;
let greaterThan10 = arr.reduce(function (acc, curr) {
  if (curr > 10) {
    count++;
  }
});
console.log(count);
