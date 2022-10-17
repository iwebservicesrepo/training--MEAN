function task20(arr) {
  function upper(name) {
    if (name <= "A" || name <= "Z") {
      return name;
    }
  }
  let filter = arr.filter(function (n) {
    return upper(n);
  });
  console.log(filter);
}
task20(["name", "Java", "Master", "tech"]);
