function biggerArray(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumArr2 += arr2[i];
  }
  if (sumArr1 > sumArr2) {
    console.log("Big1");
  } else if (sumArr2 > sumArr1) {
    console.log("Big2");
  } else {
    console.log("Equal");
  }
}
biggerArray([1, 3, 5, 7, 9], [2, 4, 19]);
