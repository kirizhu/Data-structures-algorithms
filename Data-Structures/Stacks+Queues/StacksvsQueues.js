/**
 * STACKS browser history example:
  If we first visit google -> udemy -> youtube, they would be placed on the stack like so

  youtube
  udemy
  google
 
  Pressing the back button would then remove the latest entry to the stack

  First in last out FILO

  Can be built with Arrays or LinkedLists and both work really well for this depending on what type of operations you will be doing with it.
 */

/**
 * QUEUES waiting list example:
  If the people join the waiting list in the following order:

  Matt -- Joy -- Samir -- Pavel

  The one first on the waiting list will then be the first served

  First in first out FIFO

  Can be built with Arrays or LinkedLists but it is not a good idea cause unshifting is a O(n) operation while Linkedlist are scattered in memory and you can just remove the head without making changes to the rest of the queue
 */
