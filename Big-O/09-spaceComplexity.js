//#5 Space complexity O(1)
//let i is the only thing that takes up memory
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log('booooo');
  }
}
boooo([1, 2, 3, 4, 5]);

// #6 Space complexity O(n)
// cause the input controls the number of elements returned in the array
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6);
