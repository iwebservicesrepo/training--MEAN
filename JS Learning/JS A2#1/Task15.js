function findAlternating(numArray) {
  let status = "";
  if (numArray[0] % 2 === 0) {
    status = "Alternating";
  } else {
    status = "not";
  }

  for (let i = 0; i < numArray.length; i++) {
    if (i != numArray.length - 1) {
      if (numArray[i] % 2 === 1) {
        if (numArray[i + 1] % 2 === 0) {
          status = "Alternating";
        } else {
          status = "not";
          break;
        }
      }
      if (numArray[i] % 2 === 0) {
        if (numArray[i + 1] % 2 === 1) {
          status = "Alternating";
        } else {
          status = "Not";
          break;
        }
      }
    }
  }
  return status;
}
console.log(findAlternating([2, 3, 4, 5, 6, 7, 8, 10]));
