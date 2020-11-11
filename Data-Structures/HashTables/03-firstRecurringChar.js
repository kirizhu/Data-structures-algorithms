//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
//O(n^2)
function firstRecurringCharacter(arr) {
  for (i = 0; i < arr.length; i++) {
    // console.log(arr.indexOf(arr[i]), i);
    //The indexOf() method returns the first index at which a given element can be found in the array so this mean that if the condition is false we have found our first recurring char
    if (arr.indexOf(arr[i]) !== i) {
      console.log(arr[i]);
      return;
    }
  }
  console.log(undefined);
}

// firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);

function firstRecurringCharacter2(input) {
  let mySet = new Set();
  for (let i = 0; i < input.length; i++) {
    //we are adding tha values to the set unless we already have it in the set, then we return the value
    if (mySet.has(input[i])) {
      console.log(input[i]);
      return;
    } else {
      mySet.add(input[i]);
    }
  }
  console.log(undefined);
}

firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//Fast lookups, inserts  and flexible keys
//Slow key iteration and unordered
