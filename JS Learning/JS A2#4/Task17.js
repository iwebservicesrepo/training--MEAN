const arr = ["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
//17.1
let newArr = arr.reduce(function (acc, curr) {
  return acc + "#" + curr;
});
console.log(newArr);
//17.2
let countCh = 0;
let ch = arr.reduce(function (acc, curr) {
  for (let i = 0; i < curr.length; i++) {
    if (curr[i] == "a") {
      countCh++;
    }
  }
  return countCh;
});
console.log(ch);
//17.3
let longestStr = arr.reduce(function (acc, curr) {
  if (acc.length > curr.length) {
    return acc;
  } else return curr;
});
console.log(longestStr);
//17.4
let count = 0;
let specificCh = arr.reduce(function (acc, curr) {
  let ch = "J";
  if (curr[0] == ch) {
    count++;
  }
  return count;
});
console.log(specificCh);
