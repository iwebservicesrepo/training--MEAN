function sumAndCount(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      sum += arr[i];
      count++;
    }
  }
  console.log("Sum of multiples of 3=" + sum + " and Count=" + count);
}
sumAndCount([3, 4, 5, 12]);
