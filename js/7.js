var arrNums = [1, 2, 3, 4];

console.log(getSubArrays(arrNums));

function getSubArrays(arr) {
  var arrVariants = [];

  for (var i = 1; i <= arr.length; i++) {
    for (var j = 0; j <= arr.length - i; j++) {
      arrVariants.push(arr.slice(j, j + i));
    }
  }

  return arrVariants;
}
