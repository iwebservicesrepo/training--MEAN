//7.1
let studentsArr = [
  { name: "Mark", maths: 80, english: 75, science: 63 },
  { name: "Bob", maths: 90, english: 81, science: 88 },
  { name: "Julia", maths: 88, english: 87, science: 89 },
  { name: "Anthony", maths: 60, english: 64, science: 61 },
];
// console.log(studentsArr);
//7.2
const compArr = [
  { name: "Mark", computers: 90 },
  { name: "Anthony", computers: 70 },
  { name: "Julia", computers: 88 },
  { name: "Bob", computers: 81 },
];

studentsArr.forEach(function (st) {
  foreach(st);
});

function foreach(studentData) {
  let selectedStudent = compArr.find(function (stu) {
    return stu.name === studentData.name;
  });
  return (studentData.computers = selectedStudent.computers);
}

//console.log(studentsArr);
//7.3
studentsArr.forEach((studentData) => {
  let totalMarks =
    studentData.english +
    studentData.maths +
    studentData.science +
    studentData.computers;
  return (studentData.totalMarks = totalMarks);
});
console.log(studentsArr);
//7.4

let newStudentsArr = [
  { name: "Mark" },
  { name: "Bob" },
  { name: "Julia" },
  { name: "Anthony" },
];
studentsArr.forEach((studentData) => {
  let stud = newStudentsArr.find((stu) => {
    return studentData.name === stu.name;
  });
  let avgMarks =
    (studentData.english +
      studentData.maths +
      studentData.science +
      studentData.computers) /
    4;
  let maxMarks;
  if (
    studentData.english > studentData.maths &&
    studentData.english > studentData.science &&
    studentData.english > studentData.computers
  ) {
    maxMarks = studentData.english;
  } else if (
    studentData.maths > studentData.english &&
    studentData.maths > studentData.science &&
    studentData.maths > studentData.computers
  ) {
    maxMarks = studentData.maths;
  } else if (
    studentData.science > studentData.english &&
    studentData.science > studentData.maths &&
    studentData.science > studentData.computers
  ) {
    maxMarks = studentData.science;
  } else {
    maxMarks = studentData.computers;
  }
  stud.maxMarks = maxMarks;
  return (stud.avgMarks = avgMarks);
});
console.log(newStudentsArr);
//7.5
function RemoveStudent(name) {
  studentsArr.forEach(function (studentData, index) {
    if (name == studentData.name) {
      studentsArr.splice(index, 1);
    }
  });
}
RemoveStudent("Bob");
console.log(studentsArr);
