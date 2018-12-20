var arrNums = [1, -2, 3, 4, -9, 6];

console.log(maxSum(arrNums));

function maxSum(arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    var arrSum = 0;
    for (var j = i; j < arr.length; j++) {
      arrSum += arr[j];
      if (arrSum > max) {
        max = arrSum;
      }
    }
  }

  return max;
}
