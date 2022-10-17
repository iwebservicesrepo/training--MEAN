function largestElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
largestElement([100, 10, 20, 50, 64, 200]);
