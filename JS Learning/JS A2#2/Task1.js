//i.
let emp1 = {
  name: "Sam",
  dept: "Tech",
  designation: "Manager",
  salary: 40000,
  raise: true,
};
console.log(emp1);
let emp2 = {
  name: "Mary",
  dept: "Finance",
  designation: "Trainee",
  salary: 18500,
  raise: true,
};
console.log(emp2);
let emp3 = {
  name: "Bill",
  dept: "HR",
  designation: "Executive",
  salary: 21200,
  raise: false,
};
console.log(emp3);
//ii.
const empArray = [emp1, emp2, emp3];
let company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: empArray,
};
console.log(company);
//iii.
let emp4 = {
  name: "Anna",
  dept: "Tech",
  designation: "Executive",
  salary: 25600,
  raise: false,
};
company.employees.push(emp4);
console.log(company);
//iv.
function computeSalary(compJSON) {
  let empArr = compJSON.employees;
  let total = 0;
  for (let i = 0; i < empArr.length; i++) {
    let emp = empArr[i];
    total += emp.salary;
  }
  return total;
}
let totSalary = computeSalary(company);
console.log("Total Salary is:", totSalary);
//v.
function processRaise(compJSON) {
  let empArr = compJSON.employees;
  for (let i = 0; i < empArr.length; i++) {
    let emp = empArr[i];
    if (emp.raise) {
      emp.salary = emp.salary * 1.1;
      emp.raise = false;
    }
  }
}
processRaise(company);
console.log(company);
//vi.
const wfhEmps = ["Anna", "Sam"];
function addWfh(compJSON, wfhEmps) {
  let empArr = compJSON.employees;
  for (let i = 0; i < empArr.length; i++) {
    let emp = empArr[i];
    emp.wfh = checkInArray(emp.name, wfhEmps);
  }
}
function checkInArray(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return true;
    }
  }
  return false;
}
addWfh(company, wfhEmps);
console.log(company);
