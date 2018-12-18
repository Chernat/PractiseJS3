var arrNums = [5,23,34,34,1,3,5,20];

function arrSum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum(arrNums))
