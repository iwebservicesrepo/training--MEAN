function task(personArray, continentArray, checkContinent) {
  personArray.forEach(function (st) {
    foreach(st);
  });

  function foreach(personData) {
    let continentData = continentArray.find(function (stu) {
      return stu.city === personData.city;
    });
    return (personData.continent = continentData.continent);
  }
  console.log(personArray);

  console.log(
    personArray.filter((names) => {
      if (names.continent == checkContinent) {
        return names;
      }
    })
  );
  personArray = personArray.sort(asc);
  function asc(name1, name2) {
    return name1.continent.localeCompare(name2.continent);
  }
  console.log(personArray);
}
task(
  [
    { name: "Mary", city: "London" },
    { name: "Anita", city: "Paris" },
    { name: "Edward", city: "New York" },
    { name: "Thomas", city: "Rome" },
    { name: "Robin", city: "Seattle" },
    { name: "Sophia", city: "Los Angeles" },
    { name: "Bruce", city: "Delhi" },
  ],
  [
    { city: "London", continent: "Europe" },
    { city: "Delhi", continent: "Asia" },
    { city: "Seattle", continent: "North America" },
    { city: "Paris", continent: "Europe" },
    { city: "New York", continent: "North America" },
    { city: "Rome", continent: "Europe" },
    { city: "Bengaluru", continent: "Asia" },
    { city: "Los Angeles", continent: "North America" },
  ],
  "North America"
);
