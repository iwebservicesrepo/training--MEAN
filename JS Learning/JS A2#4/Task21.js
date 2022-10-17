let students = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];
//21.1
students = students.sort(asc);
function asc(num1, num2) {
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < num1.marks.length; i++) {
    sum += num1.marks[i];
  }
  for (let i = 0; i < num2.marks.length; i++) {
    sum2 += num2.marks[i];
  }
  if (sum > sum2) {
    return 1;
  } else if (sum < sum2) {
    return -1;
  } else return 0;
}
console.log(students);
//21.2
console.log(
  students.filter((student) => {
    for (let i = 0; i < student.marks.length; i++) {
      if (student.marks[i] > 70) {
        return student;
      }
    }
  })
);
//21.3
// let newArr = students.reduce(function (n1, n2) {
//   let sum = 0;
//   let sum2 = 0;
//   for (let i = 0; i < n1.marks.length; i++) {
//     sum += n1.marks[i];
//     console.log(n1.marks[i], sum);
//   }
//   for (let i = 0; i < n2.marks.length; i++) {
//     console.log(n2.marks[i]);
//     sum2 += n2.marks[i];
//   }
//   if (sum > sum2) {
//     return n1;
//   } else n2;
// });
// console.log(newArr);
//21.4
const arrOfTotalMark = students.map((student) => {
  const { name, marks } = student;
  return {
    name,
    totalMarks: marks.reduce((acc, curr) => {
      return (acc += curr);
    }, 0),
  };
});
console.log(arrOfTotalMark);
//21.5
const arrOfMaxMark = students.map((student) => {
  const { name, marks } = student;
  return {
    name,
    maxMark: marks.reduce((acc, curr) => {
      if (acc > curr) {
        return acc;
      } else {
        return curr;
      }
    }, 0),
  };
});
console.log(arrOfMaxMark);
