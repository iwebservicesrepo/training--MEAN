//a
//i.
const nums = [2, 3, 4, 5];
const arr = nums.map(function (element) {
  return element * element;
});
console.log(arr);
//ii.
const numbers = [3, 10, -5, 0, -22, 6];
const nums1 = numbers.map(function (element) {
  if (element >= 0) {
    return element;
  } else {
    return -1 * element;
  }
});
console.log(nums1);
//iii.
const strArr = ["Hi", "XYZ", "bye", "A"];
const arr1 = strArr.map(function (element) {
  return "<p>" + element + "</p>";
});
console.log(arr1);
//iv.
const strArr1 = ["Hi", "Hello", "bye", "Good", "A"];
let maxLen = 3;
const ar = strArr1.map(function (element) {
  if (element.length <= maxLen) {
    return element;
  } else {
    return element.substring(0, maxLen);
  }
});
console.log(ar);
//v.
const prods = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 12 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Perk", qty: 20, price: 5 },
];
const val = prods.map(function (element) {
  let v1 = element.qty * element.price;
  let json1 = { name: element.name, value: v1 };
  return json1;
});
val.sort(asc);
console.log(val);
function asc(p1, p2) {
  if (p1.value > p2.value) {
    return -1;
  } else if (p1.value < p2.value) {
    return 1;
  } else return 0;
}
//vi.
const nameArr = ["Jack", "Bob Smith", "Ana Cook", "Tim"];
const fullName = nameArr.map(function (element) {
  return makeNameJSON(element);
});
function makeNameJSON(name) {
  let index = name.indexOf(" ");
  let json = {};
  if (index < 0) {
    json.firstName = name;
    json.lastName = "";
  } else {
    json.firstName = name.substring(0, index);
    json.lastName = name.substring(index + 1);
  }
  return json;
}
console.log(fullName);
//b
//i.
const number = [2, 3, 4, 5];
let sum = number.reduce(function (acc, curr) {
  let cube = curr * curr * curr;
  return acc + cube;
}, 0);
console.log(sum);
//ii.
const numArr = [2, 4, 6, 10, 5, 22, 9, 3];
let max = numArr.reduce(function (acc, curr) {
  if (curr > acc) {
    return curr;
  } else return acc;
}, 0);
console.log(max);
//iii.
const str = ["Steve", "Bob", "Ed", "Jack", "Ana"];
let min = str.reduce(function (acc, curr) {
  if (acc.length > curr.length) {
    return curr;
  } else return acc;
});
console.log(min);
//iv.
const prods1 = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 12 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Perk", qty: 20, price: 5 },
];
let total = prods1.reduce(function (acc, curr) {
  let v1 = curr.qty * curr.price;
  return v1 + acc;
}, 0);
console.log(total);
//v.
let maxProd = prods1.reduce(function (acc, curr) {
  let v1 = curr.qty * curr.price;
  let accValue = acc.qty * acc.price;
  if (v1 > accValue) {
    return curr;
  } else return acc;
});
console.log(maxProd);
