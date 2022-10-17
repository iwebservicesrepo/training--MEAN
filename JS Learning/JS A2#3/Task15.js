let people = [
  { name: "Jack", country: "USA", age: 35 },
  { name: "Amit", country: "India", age: 38 },
  { name: "Edward", country: "USA", age: 41 },
  { name: "Vishal", country: "India", age: 30 },
  { name: "Annie", country: "USA", age: 27 },
  { name: "Preeti", country: "India", age: 25 },
  { name: "Sophie", country: "France", age: 29 },
  { name: "Harpreet", country: "India", age: 48 },
  { name: "Bob", country: "USA", age: 21 },
];
people = people.sort(ascCountryAndAge);
//people = people.sort((p1, p2) => sortString(p1.country, p2.country));
function ascName(str1, str2) {
  if (str1.name.toLowerCase() > str2.name.toLowerCase()) {
    return 1;
  } else if (str1.name.toLowerCase() < str2.name.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
}
function descAge(str1, str2) {
  if (str1.age > str2.age) {
    return -1;
  } else if (str1.age < str2.age) {
    return 1;
  } else {
    return 0;
  }
}
function ascCountryAndName(person1, person2) {
  //sortString(person1.country, person2.country);
  if (person1.country.toLowerCase() > person2.country.toLowerCase()) {
    return 1;
  } else if (person1.country.toLowerCase() < person2.country.toLowerCase()) {
    return -1;
  } else {
    return ascName(person1, person2);
    //   if (person1.name.toLowerCase() > person2.name.toLowerCase()) {
    //     return 1;
    //   } else if (person1.name.toLowerCase() < person2.name.toLowerCase()) {
    //     return -1;
    //   } else return 0;
  }
}
function ascCountryAndAge(person1, person2) {
  if (person1.country.toLowerCase() > person2.country.toLowerCase()) {
    return 1;
  } else if (person1.country.toLowerCase() < person2.country.toLowerCase()) {
    return -1;
  } else {
    return -1 * descAge(person1, person2);
  }
}
function sortString(str1, str2) {
  if (str1.toLowerCase() > str2.toLowerCase()) {
    return 1;
  } else if (str1.toLowerCase() < str2.toLowerCase()) {
    return -1;
  } else return 0;
}
console.log(people);
