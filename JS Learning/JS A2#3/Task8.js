const students = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];

console.log(
  students.filter((student) => {
    let sum = 0;
    for (let i = 0; i < student.marks.length; i++) {
      sum += student.marks[i];
    }

    if (sum < 250) {
      return student;
    }
  })
);
console.log(
  students.filter((student) => {
    for (let i = 0; i < student.marks.length; i++) {
      if (student.marks[i] > 70) {
        return student;
      }
    }
  })
);
console.log(
  students.filter((student) => {
    let count = 0;
    for (let i = 0; i < student.marks.length; i++) {
      if (student.marks[i] > 70) {
        count++;
      }
      if (count >= 2) {
        return student;
      }
    }
  })
);
console.log(
  students.filter((student) => {
    let sum = 0;
    for (let i = 0; i < student.marks.length; i++) {
      sum += student.marks[i];
    }

    if (sum / 4 > 60) {
      return student;
    }
  })
);

// function lessThan(name, totalMarks) {
//   let sum = 0;
//   for (let i = 0; i < name.marks.length; i++) {
//     sum += name.marks[i];

//     if (sum < totalMarks) {
//       return name;
//     }
//   }
// }
// let filter = students.filter(function (n) {
//   return lessThan(n, totalMarks);
// });
// console.log(filter);
