# Big O Cheat Sheet:

## Big Os
- [X]  O(1) Constant- no loops
- [X]  O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- [X]  O(n) Linear- for loops, while loops through n items
- [X]  O(n log(n)) Log Liniear- usually sorting operations
- [X]  O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
- [X]  O(2^n) Exponential- recursive algorithms that solves a problem of size N
- [X]  O(n!) Factorial- you are adding a loop for every element

- [X]  Iterating through half a collection is still O(n)
- [X]  Two separate collections: O(a * b)

## What can cause time in a function?-
- [X]  Operations (+, -, *, /)
- [X]  Comparisons (<, >, ==)
- [X]  Looping (for, while)
- [X]  Outside Function call (function())

## Rule Book
- [X]  Rule 1: Always worst Case
- [X]  Rule 2: Remove Constants
- [X]  Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
      + for steps in order
      * for nested steps
- [X]  Rule 4: Drop Non-dominant terms
  
## What causes Space complexity?-
- [X]  Variables
- [X]  Data Structures
- [X]  Function Call
- [X]  Allocations */