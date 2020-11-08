const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.

// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
//lookup O(1)
strings[2];

//push 0(1)
strings.push('e');

//pop 0(1)
strings.pop();
strings.pop();

//unshift 0(n)
strings.unshift('x');

//splice 0(n)
strings.splice(2, 0, 'alien');

console.log(strings);
