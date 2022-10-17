const arr = [
  { fname: "Jack", lname: "Smith", city: "London" },
  { fname: "Mary", lname: "Markle", city: "Amsterdam" },
  { fname: "Ed", lname: "May", city: "Paris" },
  { fname: "Tim", lname: "Gates", city: "Rome" },
];
const newArr = arr.map(function (elements) {
  return elements.city;
});
console.log(newArr);
