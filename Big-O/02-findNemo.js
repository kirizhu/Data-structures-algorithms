const { performance } = require('perf_hooks');

const large = new Array(1000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(large);

// O(n) --> Linear time O(1000)
// Most common
