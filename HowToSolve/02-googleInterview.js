const hasPairWithSum = (arr1, sum) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
};

const hasPairWithSum2 = (arr1, sum) => {
  let map = new Set();
  for (let i = 0; i < arr1.length; i++) {
    if (map.has(arr1[i])) {
      console.log(true);
      return true;
    }
    map.add(arr1[i]);
  }
};
