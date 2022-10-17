function largeElement(arr) {
  if (arr[0] > arr[arr.length - 1]) {
    console.log("First:", arr[0]);
  } else if (arr[arr.length - 1] > arr[0]) {
    console.log("Last:", arr[arr.length - 1]);
  } else {
    console.log("Equal", arr[0]);
  }
}
largeElement([10, 8, 6, 4, 2, 0]);
