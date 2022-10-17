function addHello(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "Hello " + arr[i];
  }
  console.log(arr);
}
addHello(["Jack", "Mary"]);
