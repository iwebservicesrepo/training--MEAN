function arr(equal, greater, multiple) {
  const numbers = [1, 3, 14, 10, 12, 20, 36, 4, 33];
  function isEqual(n, comp) {
    return n == comp;
  }
  let num1 = numbers.find(function (n) {
    return isEqual(n, equal);
  });
  let index1 = numbers.findIndex(function (n) {
    return isEqual(n, equal);
  });
  let filter1 = numbers.filter(function (n) {
    return isEqual(n, equal);
  });
  console.log("Find ", num1);
  console.log("Index ", index1);
  console.log("Filter ", filter1);
  function isGreater(n, comp) {
    return n > comp;
  }
  let num2 = numbers.find(function (n) {
    return isGreater(n, greater);
  });
  let index2 = numbers.findIndex(function (n) {
    return isGreater(n, greater);
  });
  let filter2 = numbers.filter(function (n) {
    return isGreater(n, greater);
  });
  console.log("Find ", num2);
  console.log("Index ", index2);
  console.log("Filter ", filter2);
  function isMultiple(n, comp) {
    if (n % 3 == 0) {
      return n;
    }
  }
  let num3 = numbers.find(function (n) {
    return isMultiple(n, multiple);
  });
  let index3 = numbers.findIndex(function (n) {
    return isMultiple(n, multiple);
  });
  let filter3 = numbers.filter(function (n) {
    return isMultiple(n, multiple);
  });
  console.log("Find ", num3);
  console.log("Index ", index3);
  console.log("Filter ", filter3);
}

arr(10, 30, 3);
