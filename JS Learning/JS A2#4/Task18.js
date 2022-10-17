const students = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 72, science: 75 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 81 },
];
//18.1
let mathsMarks = students.reduce(function (acc, curr) {
  return acc + curr.maths;
}, 0);
console.log(mathsMarks);
//18.2
let count = 0;
let scienceMarks = students.reduce(function (acc, curr) {
  if (curr.science > 60) {
    count++;
  }
  return count;
}, 0);
console.log(scienceMarks);
//18.3
let englishMarks = students.reduce(function (acc, curr) {
  if (acc.english > curr.english) {
    return acc;
  } else return curr;
});
console.log(englishMarks);
//18.4
let newArr = [];
let maths = students.reduce(function (acc, curr) {
  if (curr.maths > 60) {
    newArr.push(curr);
  }
  return newArr;
}, 0);
console.log(maths);
//18.5
let newArr1 = [];
let total = students.reduce(function (acc, curr) {
  let sum = 0;
  sum += curr.english + curr.maths + curr.science;
  if (sum < 200) {
    newArr1.push(curr);
  }
  return newArr1;
}, 0);
console.log(total);
