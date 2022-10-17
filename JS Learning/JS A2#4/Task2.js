const arr = [4, 8, 12, 20, 6];
const newArr = arr.map(function (element) {
  return doubleNumber(element);
});
console.log(arr);
console.log(newArr);

function doubleNumber(num) {
  return 2 * num;
}
