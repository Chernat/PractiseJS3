var arrNums = [1, -2, 3, 4, -9, 6];

function maxSum(arr) {
  var max = 0;
      gb = 0;

  for (var i = 1; i <= arr.length; i++) {
    for (var j = 0; j <= arr.length - i; j++ ) {
      console.log(arr.slice(j,j+i));
    }

    if (gb > max) {
      max = gb;
    }
  }

  return max;
}

console.log(maxSum(arrNums))
