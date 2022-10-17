//a
//i.
const numbers = [2, 5, 10, 12, 18, 21];
const x = 15;
let num1 = numbers.find(function (n) {
  return isBig(n, x);
});
console.log("Find ", num1);
let index = numbers.findIndex(function (n) {
  return isBig(n, x);
});
console.log("Index ", index);
let filter = numbers.filter(function (n) {
  return isBig(n, x);
});
console.log("Filter ", filter);

function isBig(n, comp) {
  return n > comp;
}
//ii.
const names = ["Jack", "Ana", "Sam", "Tim", "Julia", "Joe"];
const ch = "J";
let name1 = names.find(function (name) {
  return isStarting(name, ch);
});
console.log("Find ", name1);

function isStarting(name, start) {
  return name[0] == start;
}

let index1 = names.findIndex(function (name) {
  return isStarting(name, ch);
});
console.log("Index ", index1);

let arr = names.filter(function (name) {
  return isStarting(name, ch);
});
console.log("Filter ", arr);
//iii.
const names1 = ["Jack", "Ana", "Sam", "Tim", "Julia", "Joe"];
const ch1 = "J";
function findName(namesArr, toFind) {
  let name2 = namesArr.find(function (name) {
    return isStarting(name, toFind);
  });
  return name2;
}

console.log("Using function ", findName(names, ch));

function isStarting(name, start) {
  return name[0] == start;
}
function findNameIndex(namesArr, toFind) {
  let index2 = namesArr.findIndex(function (name) {
    return isStarting(name, toFind);
  });
  return index2;
}
console.log("Index ", findNameIndex(names, ch1));
function filterNames(namesArr, toFind) {
  let arr1 = namesArr.filter(function (name) {
    return isStarting(name, toFind);
  });
  return arr1;
}
console.log("Filter ", filterNames(names, ch));
//iv.
const employees = [
  { name: "Jack", city: "Delhi", dept: "Tech" },
  { name: "Ana", city: "London", dept: "Tech" },
  { name: "Sam", city: "London", dept: "HR" },
  { name: "Tim", city: "Delhi", dept: "HR" },
  { name: "Bon", city: "Delhi", dept: "Tech" },
  { name: "Mary", city: "London", dept: "Tech" },
];
let city = "Delhi";
let dept = "HR";
let emp1 = employees.find(function (emp) {
  return emp.city == city && emp.dept == dept;
});
console.log(emp1);
let empIndex = employees.findIndex(function (emp) {
  return (emp.city == city) & (emp.dept == dept);
});
console.log(empIndex);
let empArr = employees.filter(function (emp) {
  return (emp.city == city) & (emp.dept == dept);
});
console.log(empArr);
//b
//i.
const empName = ["Jack", "Tim", "Anna", "Mark", "Steve", "Ed"];
const empNameCopy = [...empName];
empNameCopy.sort(compLengthAsc);
function compLengthAsc(str1, str2) {
  if (str1.length > str2.length) {
    return 1;
  } else if (str1.length < str2.length) {
    return -1;
  } else {
    return 0;
  }
}
console.log(empName);
console.log(empNameCopy);
//ii.
const salesData = [
  { name: "Pepsi", qty: 20, price: 15 },
  { name: "Coke", qty: 15, price: 10 },
  { name: "Maggi", qty: 10, price: 12 },
  { name: "Colgate", qty: 6, price: 60 },
  { name: "Nescafe", qty: 30, price: 9 },
];
salesData.sort(compValueDesc);
function compValueDesc(pr1, pr2) {
  let v1 = pr1.qty * pr1.price;
  let v2 = pr2.qty * pr2.price;
  if (v1 > v2) {
    return -1;
  } else if (v1 < v2) {
    return 1;
  } else {
    return 0;
  }
}
console.log(salesData);
//iii.
const stuData = [
  { name: "Jack", marks1: 33, marks2: 25 },
  { name: "Bob", marks1: 40, marks2: 32 },
  { name: "Mary", marks1: 41, marks2: 40 },
  { name: "Tom", marks1: 24, marks2: 25 },
  { name: "Harry", marks1: 30, marks2: 35 },
  { name: "Anna", marks1: 32, marks2: 37 },
];
let minCut = 69;
function getStuData(arr, cut) {
  let arr1 = arr.filter(function (st) {
    return st.marks1 + st.marks2 > cut;
  });
  arr1.sort(compTotalDesc);
  return arr1;
}
const newArr1 = getStuData(stuData, minCut);
console.log(newArr1);
function compTotalDesc(st1, st2) {
  let tot1 = st1.marks1 + st1.marks2;
  let tot2 = st2.marks1 + st2.marks2;
  if (tot1 > tot2) {
    return -1;
  } else if (tot1 < tot2) {
    return 1;
  } else {
    return 0;
  }
}
//c Find = Find returns the first element which satisfies the condition in an array.
//FindIndex= FindIndex returns the index number of the element which satisfies the condition.
//Filter= Filter returns all the elements of the array which satisfies the condition.
//d Find returns undefined if no element in the array matches.
//FindIndex returns -1 if no element in the array matches.
//e Spread Operator creates a copy of the array. The copy is different from the original array i.e changes made to the copy are not reflected in the original and vice versa.
//f Sort Function sorts the elements of the array in place using specified sorting function.
//g Sort does not create a new array it sorts the array in place. You should create a copy array if the original array is not to be changed.
