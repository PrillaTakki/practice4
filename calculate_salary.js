export function calculate_salary(role) {
  if (role === 'engineer') {
    return 4000;
  }

  if (role === 'accountant') {
    return 2500;
  }
  return 1500;
}
