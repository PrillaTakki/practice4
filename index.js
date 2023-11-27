function calculate_salary(role) {
  let salary = 0;
  if (role === 'engineer') {
    salary = 4000;
  } else {
    salary = 1500;
  }
  return salary;
}

let worker1 = {
  name: 'Вася',
  role: 'worker',
  age: 23,
};

let engineer1 = {
  name: 'Григорий Палыч',
  role: 'engineer',
  age: 42,
};

let worker2 = {
  name: 'Гриша',
  role: 'worker',
  age: 25,
};

let engineer2 = {
  name: 'Сан Саныч',
  role: 'engineer',
  age: 54,
};

let employees = [worker1, engineer1, worker2];
employees.push(engineer2);

let total_salary = 0;
let employee_index = 0;
while (employees[employee_index] !== undefined) {
  let employee = employees[employee_index];
  let salary = calculate_salary(employee.role);
  total_salary = total_salary + salary;
  employee_index = employee_index + 1;
}
console.log(total_salary);
