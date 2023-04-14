"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;

  if(d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }

  else if(d === 0) {
    arr.push(-b/(2*a));
  }
return arr;
  else {
    arr = [];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) isNaN(contribution) isNaN(amount) isNaN(countMonths)) {
    return false;
  }

  percent = percent/100/12;

  let loanBody = amount - contribution;

  let monthlyPayment = loanBody*(percent + (percent/((1 + percent)**countMonths - 1)));

  let totalAmount = monthlyPayment*countMonths;

  return Number(totalAmount.toFixed(2));

}