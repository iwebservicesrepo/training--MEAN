function arr(mathMarks, totalMarks, num, num1, num2) {
  const students = [
    { name: "Jack", maths: 55, english: 60, science: 62 },
    { name: "Anita", maths: 62, english: 65, science: 56 },
    { name: "Thomas", maths: 68, english: 72, science: 75 },
    { name: "Steve", maths: 51, english: 56, science: 68 },
    { name: "Julia", maths: 47, english: 77, science: 72 },
    { name: "Mary", maths: 72, english: 55, science: 81 },
  ];
  function lessInMaths(name, mathMarks) {
    if (name.maths < mathMarks) {
      return name;
    }
  }
  let find = students.find(function (n) {
    return lessInMaths(n, mathMarks);
  });

  let index = students.findIndex(function (n) {
    return lessInMaths(n, mathMarks);
  });
  let filter = students.filter(function (n) {
    return lessInMaths(n, mathMarks);
  });
  console.log(
    "First student with marks less than " + mathMarks + " in maths: ",
    find
  );
  console.log(
    "Index of first student with marks less than " + mathMarks + " in maths: ",
    index
  );
  console.log(
    "Array of students with marks less than " + mathMarks + " in maths: ",
    filter
  );

  function moreThanTotalMarks(name, totalMarks) {
    if (name.maths + name.english + name.science > totalMarks) {
      return name;
    }
  }
  let find1 = students.find(function (n) {
    return moreThanTotalMarks(n, totalMarks);
  });
  let index1 = students.findIndex(function (n) {
    return moreThanTotalMarks(n, totalMarks);
  });
  let filter1 = students.filter(function (n) {
    return moreThanTotalMarks(n, totalMarks);
  });
  console.log(
    "First student whose total marks are more than " + totalMarks + " is",
    find1
  );
  console.log(
    "Index of first student whose total marks are more than " +
      totalMarks +
      " is",
    index1
  );
  console.log(
    "Array of students whose total marks are more than " + totalMarks + " is",
    filter1
  );
  function moreThanNumInAll(name, num) {
    if (name.maths > num && name.english > num && name.science > num) {
      return name;
    }
  }
  let find2 = students.find(function (n) {
    return moreThanNumInAll(n, num);
  });
  let index2 = students.findIndex(function (n) {
    return moreThanNumInAll(n, num);
  });
  let filter2 = students.filter(function (n) {
    return moreThanNumInAll(n, num);
  });
  console.log(
    "First student who scored more than " + num + " in all subjects",
    find2
  );
  console.log(
    "Index of first student who scored more than " + num + " in all subjects",
    index2
  );
  console.log(
    "Array of students who scored more than " + num + " in all subjects",
    filter2
  );
  function compMarks(name, num1, num2) {
    if (name.maths > num1 && name.science > num2) {
      return name;
    }
  }
  let filter3 = students.filter(function (n) {
    return compMarks(n, num1, num2);
  });
  console.log(
    "The array for those whose marks in maths is more than " +
      num1 +
      " and marks in science is more than " +
      num2 +
      " are",
    filter3
  );
}
arr(50, 200, 55, 60, 56);
