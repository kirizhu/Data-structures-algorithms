function mergeSortedArrays(arr1, arr2) {
  //check input
  if (!Array.isArray(arr1) || arr1.length === 0) {
    console.log(arr2);
    return arr2;
  }
  if (!Array.isArray(arr2) || arr2.length === 0) {
    console.log(arr1);
    return arr1;
  }

  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (arr1[i] || arr2[j]) {
    //if arr2[j] undefined or arr1[i] < arr2[j] push arr1[i] this also covers the fact that if arr[i] is undefined it will return false on the comparison with arr2[j] and go to the else statement
    if (!arr2[j] || arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  console.log(mergedArray);
  return mergedArray;
}
//cleaner solution
function mergeSortedArrays2(arr1, arr2) {
  //check input
  if (!Array.isArray(arr1) || arr1.length === 0) {
    console.log(arr2);
    return arr2;
  }
  if (!Array.isArray(arr2) || arr2.length === 0) {
    console.log(arr1);
    return arr1;
  }

  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

  console.log(mergedArray);
  return mergedArray;
}
mergeSortedArrays([4, 7, 9, 35], [3, 4, 6, 30]);
mergeSortedArrays2([4, 7, 9, 35], [3, 4, 6, 30]);
