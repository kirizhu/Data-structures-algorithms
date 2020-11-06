//Given 2 arrays, create a function that lets a user know (true/false) if the 2 arrays contain common items.

// For example:
const arr1 = ['a', 'b', 'c', 'g'];
const arr2 = ['f', 'h', 'i', 'j'];
// false

const arr3 = ['b', 'g', 'k', 'l'];
const arr4 = ['f', 'h', 'i', 'g'];
// true

// 2 params = arrays - no size limit
// returns true/false

const hasCommonItems = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
};
hasCommonItems(arr3, arr4);
// O(a*b) quadratic
// O(1) Space complexity

const hasCommonItems2 = (arr1, arr2) => {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }
  console.log(map);
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};
hasCommonItems2(arr1, arr2);

//O(a+b) linear
//O(a) Space complexity

const hasCommonItems3 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item))
    ? console.log(true) && true
    : console.log(false) && false;
};
hasCommonItems3(arr3, arr4);
// O(?)
