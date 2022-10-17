const arr = [
  { name: "Mary", marks: 72 },
  { name: "Anita", marks: 75 },
  { name: "Thomas", marks: 81 },
  { name: "Bruce", marks: 64 },
];
const newArr = arr.map(function (elements) {
  return (
    "<tr><td>" +
    elements.name +
    "</td><td>" +
    elements.marks +
    "</td><td><button onClick=show(" +
    elements.name +
    ")>Show More</button>"
  );
});

console.log(newArr);
