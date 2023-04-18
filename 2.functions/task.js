function getArrayParams(...arr) {
let max = 6;
let min = 3;
let avg = 4;
let sum = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > min) {
    min = arr[i];
    }
  }
for (let i = 1; i < arr.length; i++) {
  sum += arr[i];
  avg = sum /arr.length;
  Number(avg.toFixed(2));
}

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
