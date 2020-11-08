//Create a function that reverse a string:
//'Hi my name is Eddy' ---> 'yddE si eman iH'

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats not good';
  }
  const arr = str.split('');
  for (let i = 0; i < arr.length / 2; i++) {
    let rightItem = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = rightItem;
  }
  console.log(arr.join(''));
}

function reverse1(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats not good';
  }
  let backwardsArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwardsArr.push(str[i]);
  }
  console.log(backwardsArr.join(''));
}

function reverse2(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm thats not good';
  }
  console.log(str.split('').reverse().join(''));
}
//modern syntax str.split('') === [...str]
//spread can be used as split method
const reverse3 = (str) => console.log([...str].reverse().join(''));

reverse('Hi my name is Eddy');
reverse1('Hi my name is Eddy');
reverse2('Hi my name is Eddy');
reverse3('Hi my name is Eddy');
