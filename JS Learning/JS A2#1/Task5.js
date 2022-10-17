function countNum(arr) {
  let count = 0;
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 21) {
      count++;
      arr1 += arr[i] + " ";
    }
  }
  console.log("Count=" + count);
  console.log("Values=" + arr1);
}
countNum([1, 2, 3, 22, 40, 65]);
