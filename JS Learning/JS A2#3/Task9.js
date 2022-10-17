function task(arr, str, boolean) {
  console.log(
    arr.filter((names) => {
      if (boolean == true) {
        if (names.name == str) {
          return names;
        }
      } else if (boolean == false) {
        if (names.tech == str) {
          return names;
        }
      }
    })
  );
}
task(
  [
    { name: "Jack", tech: "Android" },
    { name: "Mary", tech: "React" },
    { name: "Bob", tech: "Angular" },
    { name: "Steve", tech: "Spring" },
    { name: "James", tech: "Android" },
    { name: "Julia", tech: "Android" },
    { name: "Michel", tech: "React" },
    { name: "Bill", tech: "Angular" },
    { name: "Sonny", tech: "Spring" },
    { name: "Martins", tech: "React" },
    { name: "Bruce", tech: "Angular" },
    { name: "Sam", tech: "Spring" },
  ],
  "Android",
  false
);
