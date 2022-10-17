let students = [
  { name: "Jack", maths: 55, english: 60, science: 62 },
  { name: "Anita", maths: 62, english: 65, science: 56 },
  { name: "Thomas", maths: 68, english: 58, science: 54 },
  { name: "Steve", maths: 51, english: 56, science: 68 },
  { name: "Julia", maths: 47, english: 77, science: 72 },
  { name: "Mary", maths: 72, english: 55, science: 60 },
];
students = students.sort(descMaths);
function asc(str1, str2) {
  if (str1.name.toLowerCase() > str2.name.toLowerCase()) {
    return 1;
  } else if (str1.name.toLowerCase() < str2.name.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
}
function desc(str1, str2) {
  if (str1.name.toLowerCase() > str2.name.toLowerCase()) {
    return -1;
  } else if (str1.name.toLowerCase() < str2.name.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}
function ascMarks(str1, str2) {
  if (
    str1.maths + str1.english + str1.science >
    str2.maths + str2.english + str2.science
  ) {
    return 1;
  } else if (
    str1.maths + str1.english + str1.science <
    str2.maths + str2.english + str2.science
  ) {
    return -1;
  } else {
    return 0;
  }
}
function descMaths(str1, str2) {
  if (str1.maths > str2.maths) {
    return -1;
  } else if (str1.maths < str2.maths) {
    return 1;
  } else {
    return 0;
  }
}
console.log(students);
