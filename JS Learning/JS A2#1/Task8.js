function convertOddtoEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      arr[i] += 1;
    }
  }
  console.log(arr);
}
convertOddtoEven([5, 7, 9]);
