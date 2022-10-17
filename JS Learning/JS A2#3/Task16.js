let students = [
  { name: "Mary", marks: [72, 65, 55, 71] },
  { name: "Anita", marks: [66, 70, 75, 53] },
  { name: "Edward", marks: [44, 54, 64, 58] },
  { name: "Thomas", marks: [62, 55, 65, 81] },
  { name: "Robin", marks: [41, 44, 47, 49] },
  { name: "Sophia", marks: [71, 73, 67, 77] },
  { name: "Bruce", marks: [52, 57, 61, 64] },
];
students = students.sort(descMarks);
function descMarks(name1, name2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < name1.marks.length; i++) {
    sum1 += name1.marks[i];
  }
  for (let i = 0; i < name2.marks.length; i++) {
    sum2 += name2.marks[i];
  }
  if (sum1 > sum2) {
    return -1;
  } else if (sum1 < sum2) {
    return 1;
  } else {
    return 0;
  }
}
console.log(students);
