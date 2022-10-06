function stringOccurence(str, char1) {
  let len = str.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == char1) {
      count++;
    }
  }
  console.log(count);
}
stringOccurence("abracadabra", "a");
