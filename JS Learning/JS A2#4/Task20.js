let arr = [
  {
    model: "Swift Dzire VXi",
    make: "Maruti",
    fuel: "Diesel",
    colors: ["White", "Silver", "Blue", "Red"],
  },
  {
    model: "Etios SMi",
    make: "Toyota",
    fuel: "Diesel",
    colors: ["White", "Grey", "Black"],
  },
  {
    model: "City AXi",
    make: "Honda",
    fuel: "Petrol",
    colors: ["Grey", "Blue", "Black"],
  },
  {
    model: "Swift DXi",
    make: "Maruti",
    fuel: "Diesel",
    colors: ["White", "Red", "Black"],
  },
  {
    model: "Etios VXi",
    make: "Toyota",
    fuel: "Diesel",
    colors: ["White", "Silver", "Black", "Yellow"],
  },
  {
    model: "City ZXi",
    make: "Honda",
    fuel: "Petrol",
    colors: ["Silver", "Blue", "Red"],
  },
  {
    model: "Alto SXi",
    make: "Maruti",
    fuel: "Petrol",
    colors: ["White", "Red", "Blue", "Yellow"],
  },
  {
    model: "Alto VXi",
    make: "Maruti",
    fuel: "Petrol",
    colors: ["White", "Silver", "Yellow", "Black"],
  },
];
console.log(
  arr.filter(function (n) {
    let colorCheck = "White";
    for (let i = 0; i < n.colors.length; i++) {
      if (n.colors[i] == colorCheck) {
        return n.model;
      }
    }
  })
);
