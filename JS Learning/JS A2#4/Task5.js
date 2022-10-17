const arr = [4, 8, 12, 3, 5];
const newArr = arr.map(function (element) {
  if (element % 2 == 0) {
    return "Even";
  } else return "Odd";
});
console.log(newArr);
