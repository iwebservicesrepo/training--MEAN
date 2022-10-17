function newArrwithEven(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArr.push(arr[i]);
    }
  }
  console.log(evenArr);
}
newArrwithEven([5, 18, 26, 30, 40, 6, 9]);
