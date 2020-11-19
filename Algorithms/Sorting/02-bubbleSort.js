const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
//A bit more effective solution
let bubbleSort2 = (inputArr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < inputArr.length - 1; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        [inputArr[i], inputArr[i + 1]] = [inputArr[i + 1], inputArr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};
//console.log(bubbleSort2(numbers));
