function task7(countryName, age, char, countryName1, minAge) {
  const names = [
    { name: "Jack", country: "USA", age: 35 },
    { name: "Amit", country: "India", age: 38 },
    { name: "Edward", country: "USA", age: 41 },
    { name: "Vishal", country: "India", age: 30 },
    { name: "Annie", country: "USA", age: 27 },
    { name: "Nick", country: "France", age: 32 },
    { name: "Francis", country: "France", age: 44 },
    { name: "Preeti", country: "India", age: 25 },
    { name: "Sophie", country: "France", age: 29 },
    { name: "Harpreet", country: "India", age: 48 },
    { name: "Bob", country: "USA", age: 21 },
  ];
  function isCountry(name, countryName) {
    if (name.country == countryName) {
      return name;
    }
  }
  let find = names.find(function (n) {
    return isCountry(n, countryName);
  });
  let index = names.findIndex(function (n) {
    return isCountry(n, countryName);
  });
  let filter = names.filter(function (n) {
    return isCountry(n, countryName);
  });
  console.log("The first person whose country is " + countryName + " is", find);
  console.log(
    "Index of the first person whose country is " + countryName + " is",
    index
  );
  console.log("Array of those whose country is " + countryName + " is", filter);
  function countryAndAge(name, countryName, age) {
    if (name.country == countryName && age > name.age) {
      return name;
    }
  }
  let find1 = names.find(function (n) {
    return countryAndAge(n, countryName, age);
  });
  let index1 = names.findIndex(function (n) {
    return countryAndAge(n, countryName, age);
  });
  let filter1 = names.filter(function (n) {
    return countryAndAge(n, countryName, age);
  });
  console.log(
    "The first person whose country is " +
      countryName +
      " and age is less than " +
      age +
      " is",
    find1
  );
  console.log(
    "Index of the first person whose country is " +
      countryName +
      " and age is less than " +
      age +
      " is",
    index1
  );
  console.log(
    "Array of those whose country is " +
      countryName +
      " and age is less than " +
      age +
      " is",
    filter1
  );
  function isNameSmaller(str, char) {
    if (str.name.length < char) {
      return str;
    }
  }
  let find2 = names.find(function (n) {
    return isNameSmaller(n, char);
  });
  let index2 = names.findIndex(function (n) {
    return isNameSmaller(n, char);
  });
  let filter2 = names.filter(function (n) {
    return isNameSmaller(n, char);
  });
  console.log(
    "First person whose name has less than " + char + " characters is",
    find2
  );
  console.log(
    "Index of the first person whose name has less than " +
      char +
      " characters is ",
    index2
  );
  console.log(
    "Array for those whose names has less than " + char + " characters is ",
    filter2
  );

  function isCountries(name, countryName, countryName1) {
    if (name.country == countryName || name.country == countryName1) {
      return name;
    }
  }
  let find3 = names.find(function (n) {
    return isCountries(n, countryName, countryName1);
  });
  let index3 = names.findIndex(function (n) {
    return isCountries(n, countryName, countryName1);
  });
  let filter3 = names.filter(function (n) {
    return isCountries(n, countryName, countryName1);
  });
  console.log(
    "The first person whose country is " +
      countryName +
      " or " +
      countryName1 +
      " is",
    find3
  );
  console.log(
    "Index of the first person whose country is " +
      countryName +
      " or " +
      countryName1 +
      " is",
    index3
  );
  console.log(
    "Array of those whose country is " +
      countryName +
      " or " +
      countryName1 +
      " is",
    filter3
  );
  function greaterThanMinAge(name, minAge) {
    if (name.age > minAge) {
      return name;
    }
  }
  let find4 = names.find(function (n) {
    return greaterThanMinAge(n, minAge);
  });
  let index4 = names.findIndex(function (n) {
    return greaterThanMinAge(n, minAge);
  });
  let filter4 = names.filter(function (n) {
    return greaterThanMinAge(n, minAge);
  });
  console.log(
    "First person whose age is greater than " + minAge + " is",
    find4
  );
  console.log(
    "Index of first person whose age is greater than " + minAge + " is",
    index4
  );
  console.log(
    "Array of those whose age is greater than " + minAge + " is",
    filter4
  );
}
task7("India", 35, 6, "USA", 30);
