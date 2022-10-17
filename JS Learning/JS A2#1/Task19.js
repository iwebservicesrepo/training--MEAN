function arrPop(arr) {
  let a = "";
  while (arr.length > 0) {
    a += " " + arr.pop();
  }
  console.log("Pops:" + a);
}
arrPop([40, 6, 9]);
