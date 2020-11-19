// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

//5! = 5*4*3*2*1
function findFactorialRecursive(number) {
  //code here
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
//
//5! = 5*4*3*2*1
function findFactorialIterative(number) {
  //code here
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}
console.log(findFactorialIterative(2));
console.log(findFactorialRecursive(5));
