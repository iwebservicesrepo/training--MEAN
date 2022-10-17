const arr = [
  { id: 101, name: "Mark" },
  { id: 105, name: "Steve" },
  { id: 78, name: "James" },
];
const newArr = arr.map(function (elements) {
  return "<p class='id'" + elements.id + ">" + elements.name + "</p>";
});
console.log(newArr);
