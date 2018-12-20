var arrNums = [4,5,64,123,8,3,4,45,123];

function maxNum(arr) {
  var maxNums = [],
      max = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if(arr[j] > max) {
        max = arr[j];
      }
    }
    if (arr[i] == max) {
      maxNums.push(arr[i]);
    }
  }
  return maxNums;
}

console.log(maxNum(arrNums));
