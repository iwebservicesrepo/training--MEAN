//Task3 already done in Task1 i.
const arr = [4, 8, 12, 3, 5, 7];
let newArr = arr.map(function (element) {
  if (element % 2 == 0) {
    return element;
  } else return 0;
});
console.log(newArr);
