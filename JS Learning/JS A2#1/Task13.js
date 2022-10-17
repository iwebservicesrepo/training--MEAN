function countElements(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 2 == 0 ||
      arr[i] % 3 == 0 ||
      arr[i] % 5 == 0 ||
      arr[i] % 7 == 0
    ) {
      count++;
    }
  }
  console.log("Count=" + count);
}
countElements([11, 13, 17, 19, 23, 121, 169]);
