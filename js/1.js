var arr = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];

bestResult(arr);
taskOneThree(arr);

function taskOneThree(arr) {
  var max = maxNum(arr);
  for (var i = 0; i < arr.length; i++) {
    console.log('Образец под номером ' + (i+1) + ' - ' + 'результат' + ' - '+ arr[i]);
  }

  console.log('Всего проведено исследований: ' + arr.length);
  console.log('Наилучший результат: ' + max);
}

function bestResult(arr) {
  var bestResult = [];
  var max = maxNum(arr);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      bestResult.push(i+1);
    }
  }
  console.log('Образцы с наилучшими результатами под номерами: ' + bestResult);
}

function maxNum(arr) {
  var maxNum;
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
