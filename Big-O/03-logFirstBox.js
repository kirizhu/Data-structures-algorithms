// Very common
const boxes = new Array(1000).fill('Boxes');
const logFirstBox = (boxes) => {
  console.log(boxes[0]); // 0(1)
};
logFirstBox(boxes);
// 0(1)

const logFirstTwoBox = (boxes) => {
  console.log(boxes[0]); // 0(1)
  console.log(boxes[1]); // 0(1)
};
logFirstTwoBox(boxes);
// 0(2)

// Constant Time is always rounded down to O(1)
// This is very scalable and predictable
