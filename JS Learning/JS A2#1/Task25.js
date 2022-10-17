function addElement(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr[i] += arr2[i];
  }
  console.log(newArr);
}
addElement([5, 18, 26, 30], [101, 102]);
