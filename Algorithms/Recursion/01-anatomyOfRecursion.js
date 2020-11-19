/**
 * What is Recursion? 
The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily. Examples of such problems are Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc.

 */

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log('End of function');
}
countDown(5);

function countDownRecursive(n) {
  if (n <= 0) {
    //Base condition
    console.log('End of function');
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
countDownRecursive(4);

/**
 * When working with:
  Merge Sort
  Quick Sort
  Tree Traversal
  Graph Traversal

  Anything done with recursion can be done with a loop.

  
 * 3 rules of a recursive function
1. Identify the base case, when to stop. In ex above its when n <= 0
2. Identify the recursive case, In ex above its when n > 0
3. Make sure to get closer and closer to the base case, and return the recursive function when needed for it to bubble up. Usually we return in base case and in recursive case.
 */
