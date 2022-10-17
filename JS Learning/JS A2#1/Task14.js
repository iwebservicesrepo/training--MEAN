function sequenceArray(arr) {
  let alternating = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 == arr[i + 1]) {
      alternating++;
    } else {
    }
  }
  if (alternating == arr.length - 1) {
    console.log("Sequence");
  } else {
    console.log("Not");
  }
}
sequenceArray([12, 13, 14, 15, 16, 17]);
