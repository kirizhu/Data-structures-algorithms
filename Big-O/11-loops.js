const large = new Array(1000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

function findNemo2(array) {
  array.forEach((fish) => {
    if (fish === 'nemo') {
      console.log('Found Nemo');
    }
  });
}
function findNemo3(array) {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found Nemo');
    }
  }
}
