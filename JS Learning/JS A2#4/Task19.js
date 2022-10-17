function task(people, city1) {
  //19.1 and 19.2
  let count = 0;
  let city = people.reduce(function (acc, curr) {
    if (curr.city == city1) {
      count++;
    }
    return count;
  }, 0);
  console.log(city);
}
task(
  [
    { fname: "Jack", lname: "Smith", city: "London" },
    { fname: "Mary", lname: "Markle", city: "London" },
    { fname: "Ed", lname: "May", city: "Paris" },
    { fname: "Tim", lname: "Gates", city: "Rome" },
  ],
  "London"
);
//19.3
function nameCity(people1, firstName) {
  let name = people1.reduce(function (acc, curr) {
    if (curr.fname == firstName) {
      return curr.city;
    }
  });
  console.log(name);
}
nameCity(
  [
    { fname: "Jack", lname: "Smith", city: "London" },
    { fname: "Mary", lname: "Markle", city: "London" },
    { fname: "Ed", lname: "May", city: "Paris" },
    { fname: "Tim", lname: "Gates", city: "Rome" },
  ],
  "Mary"
);
