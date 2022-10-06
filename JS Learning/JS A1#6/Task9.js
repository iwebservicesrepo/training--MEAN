function occurence(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], newStr);
    if (str[i] == "(") {
      newStr += "(";
    } else if (str[i] == ")" && newStr[newStr.length - 1] == "(") {
      newStr = newStr.substring(0, newStr.length - 1);
    } else if (str[i] == ")") {
      console.log("123", newStr, str[i]);
      newStr = "wrong";
      break;
    }
  }
  if (newStr == "") {
    return true;
  } else {
    return false;
  }
}
console.log(occurence("))a+b(("));
