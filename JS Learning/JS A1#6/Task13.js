function stringOccurence(str, char1) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char1) {
      count++;
    }
  }
  return count;
}
function findMaxOccurenceChar(str) {
  let count = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    const occurence = stringOccurence(str, str[i]);
    if (count < occurence) {
      count = occurence;
      char = str[i];
    }
  }
  return count;
}

console.log(findMaxOccurenceChar("museum"));
