//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let strArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    strArr.push(str[i]);
  }
  return strArr.join('');
}
console.log(reverseString('yoyo mastery'));

function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseStringRecursive('yoyo mastery'));
//should return: 'yretsam oyoy'
