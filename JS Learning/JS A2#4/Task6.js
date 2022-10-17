const strArr = ["A", "B", "C", "X", "Y"];
const newStrArr = strArr.map(function (element) {
  return element + element;
});
console.log(newStrArr);
