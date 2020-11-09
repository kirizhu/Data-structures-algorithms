let user = {
  age: 32,
  name: 'Eddy',
  magic: true,
  scream: () => {
    console.log('AAAAAAAHH!');
  },
};

console.log(user.age);
user.spell = 'Abra Kadabrah';
user.scream();
//all of them O(1)
//Hash tables, hashes the key, uses it as storage location. Sometimes we get collisions when the key is hashed to the same storage location and slows down reading and writing to O(n/k) K being the size of our Hash table.

const aMap = new Map();
//A map differentiates itself from an object in that the keys are not only made of strings. Maps also maintain insertion order.
const aSet = new Set();
//Similar to map but only stores the keys and no values
