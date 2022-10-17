function sumEvenAndOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  console.log("Sum of Even numbers=" + sumEven);
  console.log("Sum of Odd numbers=" + sumOdd);
}
sumEvenAndOdd([3, 4, 5, 12]);
