// primitive types (value types), fixed size stored on the stack
undefined;
null;
Boolean;
Number;
String;
Symbol;
// reference types are objects, dynamic size stored on the heap
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 === object2); //they reference the same object
console.log(object1 === object3); //they reference two objects that hold the same values

object1.value = 15;

console.log(object2);
