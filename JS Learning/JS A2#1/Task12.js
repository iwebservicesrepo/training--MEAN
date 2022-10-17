function checkArray(arr) {
  let equal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      equal++;
    }
  }
  if (equal == arr.length - 1) {
    console.log("All Same");
  } else {
    console.log("Different");
  }
}
checkArray([12, 12, 13, 12, 12]);
