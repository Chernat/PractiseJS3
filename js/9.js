console.log(palindrom('aabaa'));

function palindrom(str) {
  var str = str.toLowerCase().replace(/,/g, '').replace(/\s+/g, ''),
  palindromBool = true;

  for (var i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      palindromBool = false;
      break;
    }
  }

  return palindromBool;
}
