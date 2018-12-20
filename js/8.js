var arrNums = [1, -2, 3, 4, -9, 6];

function maxSum(arr) {
  var max = 0;

  for (var i = 1; i <= arr.length; i++) {
    var arrSum = 0;

    for (var j = 0; j <= arr.length - i; j++ ) {
      arrSum += arr[j];
    };

    if (arrSum > max) {
      max = arrSum;
    };
  }

  return max;
}

console.log(maxSum(arrNums))
