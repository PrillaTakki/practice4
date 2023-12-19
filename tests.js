import { calculate_salary } from './calculate_salary.js';

let passed = true;
let engineer_salary = calculate_salary('engineer');
if (engineer_salary !== 4000) {
  passed = false;
  console.log('Зарплата инженера:');
  console.log(`Ожидал 4000, а получил ${engineer_salary}`);
}

let worker_salary = calculate_salary('worker');
if (worker_salary !== 1500) {
  passed = false;
  console.log('Зарплата рабочего:');
  console.log(`Ожидал 1500, а получил ${engineer_salary}`);
}

console.log(passed);
