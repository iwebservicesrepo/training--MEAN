function arr(greater, startsWith) {
  const names = ["Mark", "Steve", "Anna", "Ed", "Julian", "Pam", "Phyllis"];
  function isGreater(str1, greater) {
    if (str1.length > greater) {
      return str1;
    }
  }
  let find = names.find(function (n) {
    return isGreater(n, greater);
  });
  let index = names.findIndex(function (n) {
    return isGreater(n, greater);
  });
  let filter = names.filter(function (n) {
    return isGreater(n, greater);
  });
  console.log("Find ", find);
  console.log("Index ", index);
  console.log("Filter ", filter);

  function startingWith(name, startsWith) {
    if (name[0] == startsWith) {
      return name;
    }
  }
  let find1 = names.find(function (n) {
    return startingWith(n, startsWith);
  });
  let index1 = names.findIndex(function (n) {
    return startingWith(n, startsWith);
  });
  let filter1 = names.filter(function (n) {
    return startingWith(n, startsWith);
  });
  console.log("Find ", find1);
  console.log("Index ", index1);
  console.log("Filter ", filter1);
}
arr(5, "P");
