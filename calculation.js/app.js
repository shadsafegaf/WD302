const calc = require('./calculation');

const rateperhour = 300;
const hoursperday = 4;
const daysperweek = 6;

const totalhours = calc.multiply(hoursperday, daysperweek);
const grossincome = calc.multiply(rateperhour, totalhours);
console.log(`The gross income is ${grossincome}`);

const tax = calc.divide(grossincome, 10); 
console.log(`Tax: ${tax}`);

const sss = 1200;
console.log(`SSS: ${sss}`);

const pagibig = 300;
console.log(`Pag-Ibig fund: ${pagibig}`);

const philhealth = 400;
console.log(`PhilHealth: ${philhealth}`);

const totaldeductions = calc.add(calc.add(tax, sss), calc.add(pagibig, philhealth));
console.log(`Total deductions: ${totaldeductions}`);

const netsalary = calc.subtract(grossincome, totaldeductions);
console.log(`The net salary is ${netsalary}`);

