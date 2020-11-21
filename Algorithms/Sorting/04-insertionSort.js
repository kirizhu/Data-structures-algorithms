const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    //i loops through the unsorted side
    let j = i - 1; //the sorted side
    let temp = nums[i]; //store the unsorted value
    while (j >= 0 && nums[j] > temp) {
      // compare the sorted value to the left against the unsorted one
      nums[j + 1] = nums[j]; // shift the sorted value to the right
      j--; // decrease j to check the next sorted number to the left
    }
    nums[j + 1] = temp; //store the value in the hole
  }
  return nums;
}

insertionSort(numbers);
console.log(numbers);
