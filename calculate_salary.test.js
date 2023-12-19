import { calculate_salary } from './calculate_salary';

test('engineer salary', function () {
  let salary = calculate_salary('engineer');
  expect(salary).toBe(4000);
});

test('worker salary', function () {
  let salary = calculate_salary('worker');
  expect(salary).toBe(1500);
});
