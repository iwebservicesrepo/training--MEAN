const arr = [
  { name: "Mark", age: 23 },
  { name: "Steve", age: 28 },
  { name: "Mary", age: 25 },
  { name: "Bill", age: 34 },
];
const newArr = arr.map(function (elements) {
  return elements.name + " is " + elements.age + " years old";
});
console.log(newArr);
