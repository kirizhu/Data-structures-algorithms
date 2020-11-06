// find 1st, find nth
const array = ['hello', 'world', 'lol'];

array[0]; //O(1)
array[array.length - 1]; //O(1)

const arrayOfObjs = [
  { tweet: 'hello', date: 2012 },
  { tweet: 'lol', date: 2014 },
  { tweet: 'world', date: 2016 },
];
//O(n^2) Quadratic time because its a nested loop

'jkldjslkdjljsadlksjdas'.length; //it depends on the language but in JS its O(1)
