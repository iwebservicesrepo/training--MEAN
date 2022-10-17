function task12(arr) {
  arr.sort(ascAbs);
  function asc(n1, n2) {
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    } else {
      return 0;
    }
  }
  function desc(n1, n2) {
    if (n1 > n2) {
      return -1;
    } else if (n1 < n2) {
      return 1;
    } else {
      return 0;
    }
  }
  function ascAbs(n1, n2) {
    if (Math.abs(n1) > Math.abs(n2)) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    } else {
      return 0;
    }
  }
  console.log(arr);
}
task12([12, 5, -6, 10, -9, 4, 0, -23, 34]);
