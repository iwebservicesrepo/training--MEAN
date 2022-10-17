function abInArray(arr) {
  let abFound = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a" && arr[i + 1] == "b") {
      abFound++;
    }
  }
  if (abFound > 0) {
    console.log("Ab found");
  } else {
    console.log("Ab not found");
  }
}
abInArray("acbcadbd");
