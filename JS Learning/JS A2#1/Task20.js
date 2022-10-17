function shiftArray(arr) {
  let a = "";
  while (arr.length > 0) {
    a += " " + arr.shift();
  }
  console.log("Shift:" + a);
}
shiftArray([40, 6, 9]);
