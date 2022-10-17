function sortString(arr) {
  return arr.sort(compareStr);
}
function compareStr(str1, str2) {
  let st1 = "",
    st2 = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] >= 0 || str1[i] <= 9) {
      st1 += str1[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] >= 0 || str2[i] <= 9) {
      st2 += str2[i];
    }
  }
  if (isNaN(st1)) {
    st1 = 0;
  } else {
    st1 = +st1;
  }
  if (isNaN(st1)) {
    st2 = 0;
  } else {
    st2 = +st2;
  }

  if (st1 > st2) {
    return 1;
  } else if (st1 < st2) {
    return -1;
  } else {
    return 0;
  }
}
console.log(sortString(["c101", "mB24x", "a4b6n7", "zzz2z"]));
console.log(sortString(["8", "9", "10", "aX2"]));
console.log(sortString(["b1b2b3a", "a125", "a80zz"]));
