/**
 * TRIES
 
  Tries is a tree that stores strings. Maximum number of children of a node is equal to size of alphabet. Trie supports search, insert and delete operations in O(L) time where L is length of key. 
  Hashing:- In hashing, we convert key to a small value and the value is used to index data. Hashing supports search, insert and delete operations in O(L) time on average. 
  
  Why Trie?  
  With Trie, we can insert and find strings in O(L) time where L represent the length of a single word. This is obviously faster than BST. This is also faster than Hashing because of the ways it is implemented. We do not need to compute any hash function. No collision handling is required (like we do in open addressing and separate chaining)
  Another advantage of Trie is, we can easily print all words in alphabetical order which is not easily possible with hashing.
  We can efficiently do prefix search (or auto-complete) with Trie.

  The main disadvantage of tries is that they need a lot of memory for storing the strings. For each node we have too many node pointers(equal to number of characters of the alphabet),
*/
