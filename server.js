var LoanJS = require('loanjs');
var loan = new LoanJS.Loan(
  1000, // amount
  12, // installments number
  5, // interest rate
  true // diminishing
);
console.log(loan);