//Task4 is similar to the questions done previously (Task 3 and Task2)
function task(endsWith, hasCh) {
  const arr = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
  function endWith(name, endsWith) {
    if (name[name.length - 1] == endsWith) {
      return name;
    }
  }
  let find = arr.find(function (n) {
    return endWith(n, endsWith);
  });
  let index = arr.findIndex(function (n) {
    return endWith(n, endsWith);
  });
  let filter = arr.filter(function (n) {
    return endWith(n, endsWith);
  });
  console.log("Find ", find);
  console.log("Index ", index);
  console.log("Filter ", filter);
  function hasChar(name, hasCh) {
    for (let i = 0; i < name.length; i++) {
      if (name[i] == hasCh) {
        return name[i];
      }
    }
  }
  let find1 = arr.find(function (n) {
    return hasChar(n, hasCh);
  });
  let index1 = arr.findIndex(function (n) {
    return hasChar(n, hasCh);
  });
  let filter1 = arr.filter(function (n) {
    return hasChar(n, hasCh);
  });
  console.log("Find ", find1);
  console.log("Index ", index1);
  console.log("Filter ", filter1);
}
task("t", "a");
