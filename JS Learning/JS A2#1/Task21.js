function removeNames(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == name) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
removeNames(["Jack", "Bob", "Ed", "Steve"], "Bob");
