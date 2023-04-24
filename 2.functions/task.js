function getArrayParams(...arr) {
let max = 0;
let min = 0;
let avg = sum/arr.length;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] > min) {
    min = arr[i];
    }
  if (sum += arr[i]) {
    avg = Number(avg.toFixed(2));
}
}
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  let max;
  let min;
  for(let i = 0; i < arr.length; i++ ) {
    if (arr[i] > max) {
    max = arr[i];
    }
    if (arr[i] > min) {
    min = arr[i];
    }
  }
  return max - min;
}
console.log(differenceMaxMinWorker());
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement =0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ===0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {

}
