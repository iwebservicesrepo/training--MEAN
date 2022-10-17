function task13(arr) {
  arr = arr.sort(ascChar);
  function asc(str1, str2) {
    if (str1.toLowerCase() > str2.toLowerCase()) {
      return 1;
    } else if (str1.toLowerCase() < str2.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }
  function desc(str1, str2) {
    if (str1.toLowerCase() > str2.toLowerCase()) {
      return -1;
    } else if (str1.toLowerCase() < str2.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }
  function ascLength(str1, str2) {
    if (str1.length > str2.length) {
      return 1;
    } else if (str1.length < str2.length) {
      return -1;
    } else {
      return 0;
    }
  }
  function ascChar(str1, str2) {}
  console.log(arr);
}
task13(["JavaScript", "Hello", "React", "Java", "Python", "C", "Node"]);
