const arr = ["Mark", "James", "Martha"];
const newArr = arr.map(function (elements) {
  return "<li>" + elements + "</li>";
});
let str = "<ul>" + newArr + "</ul>";
console.log(str);
