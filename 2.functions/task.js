'use strict'

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = -100;
  max =  100;
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  getArrayParams(min,max,avg);
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sumArr = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    sumArr = func(arrOfArr[i]);
    if (sumArr > max) {
      max = sumArr
    }
  }
  return max;
}

// Задание 3
let arrParams = getArrayParams(arr);

return arrParams.max - arrParams.min;
