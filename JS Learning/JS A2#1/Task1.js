//a
//i.
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  console.log("Count of even numbers in array is: " + count);
}
countEven([1, 2, 3, 4, 5, 6]);
//ii.
function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) {
      sum += arr[i];
    }
  }
  console.log("Sum of numbers divisible by 5 is: " + sum);
}
sumOfNumbers([2, 5, 6, 10, 5, 20]);
//iii.
function changeToUpperCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arr1 = arr[i];
    arr[i] = arr1.toUpperCase();
  }
  console.log(arr);
}
changeToUpperCase(["Hello", "Good", "World"]);
//iv.
function hasPrime(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let check = isPrime(numbers[i]);
    if (check) {
      return true;
    }
  }
  return false;
}
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(hasPrime([2, 3, 4]));
//v.
function hasbOrB(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "b" || arr[i] == "B") {
      return true;
    }
  }
  return false;
}
const arr1 = ["Bike", "Bob", "Moon"];
let count = 0;
for (let i = 0; i < arr1.length; i++) {
  if (hasbOrB(arr1[i])) {
    count++;
  }
}
console.log("Count of elements with b or B is: " + count);
//vi.
function createArray(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  console.log("Array from 1 to n: ", nums);
}
createArray(7);
//vii.
function createArray2(nums) {
  const numno3 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 != 0) {
      numno3.push(nums[i]);
    }
  }
  console.log(numno3);
}
createArray2([1, 3, 4, 6, 7, 8, 9]);
//viii.
function removeHello(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "Hello") {
      arr.splice(i, 1);
      break;
    }
  }
  console.log(arr);
}
removeHello(["Hello", "Hi", "X", "Y"]);
//ix.
function InsertInArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "JavaScript") {
      arr.splice(i + 1, 0, "Angular", "React", "Node");
      break;
    }
  }
  console.log(arr);
}
InsertInArray(["C++", "JavaScript", "Python"]);
