function task19(arr) {
  function abc(name) {
    for (let i = 0; i < name.length; i++) {
      if (name[i] == "a" || name[i] == "b" || name[i] == "c") {
        return name[i];
      }
    }
  }
  let filter = arr.filter(function (n) {
    return abc(n);
  });
  console.log(filter);
}
task19(["bear", "bell", "cab", "hello"]);
