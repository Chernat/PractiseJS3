var arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

mixNums(arrNums);

function mixNums(arr) {
  var rand,
      mixNumsArr = [];

  for (var i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (arr.length));
    while (mixNumsArr[rand] !== undefined) {
      rand = Math.floor(Math.random() * (arr.length));
    }
    mixNumsArr[rand] = arr[i];
  }
  console.log(mixNumsArr)
}
