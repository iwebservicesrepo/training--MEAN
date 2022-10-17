function InsertInArray(arr, num) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      pos++;
    } else {
      break;
    }
  }
  for (let i = arr.length - 1; i >= pos; i--) {
    arr[i + 1] = arr[i];
  }
  arr[pos] = num;
  console.log(arr);
}
InsertInArray([5, 18, 26, 30, 40], 6);
