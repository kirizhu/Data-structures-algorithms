/**
 * Program: Has to allocate memory, parse and execute commands
 *
  How JS works? And how can JS as a single threaded language be non-blocking?

The JavaScript within a chrome browser is implemented by V8 engine.

The V8 engine has two parts:
Memory Heap
Call Stack

Memory Heap: It is used to allocate the memory used by your JavaScript program. Remember memory heap is not the same as the heap data structures, they are totally different. It is the free space inside your OS.

Call Stack: Within the call stack, your JS code is read and gets executed line by line.

Now, JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program. The call stack is the same as the stack data structure that you might read in Data structures. As we know stacks are FILO that is First In Last Out. Similarly, within the call stack, whenever a line of code gets inside the call stack it gets executed and move out of the stack. In this way, the JavaScript is the single-thread language because of only one call stack.

JavaScript is a single-threaded language because while running code on a single thread, it can be really easy to implement as we don’t have to deal with the complicated scenarios that arise in the multi-threaded environment like deadlock.

Since, JavaScript is a single-threaded language, it is synchronous in nature. Now, you will wonder that you have used async calls in JavaScript so is it possible then?

So, let me explain to you the concept of async call within the JavaScript and how it is possible with single-threaded language. Before explaining it you let’s discuss briefly why we require the async call or asynchronous calls. As we know within the synchronous calls, all the work is done line by line i.e. first one task is executed then the second task is executed, no matter how much time one task will take. This arises the problem of time wastage as well as resource wastage. These two problems are overcome by asynchronous calls, where one doesn’t wait for the one call to complete instead it runs another task simultaneously. So, when we have to do things like image processing or making requests over the network like API calls, we use async calls.

Now, coming back to the previous question of how to use async call within JS. Within JS we have a lexical environment, syntax parser, an execution context (memory heap and call stack) that is used to execute the JS code. But except these browsers also have Event Loops, Callback queue, and WebAPIs that is also used to run the JS code. Although these are not the part of JS it also helps to execute the JS properly as we sometimes used the browser functions within the JS.

The DOM, AJAX and Timeout are not actually the part of JavaScript but the part of RunTime Environment or browser, so these can be run asynchronously within the WebAPI using the callback queue and again put in the call stack using event loop to execute.

Let us take an example to be every clear of the concept. Suppose we have a following piece of code that we want to execute in the JS run-time environment.
  
  * Difference between asynchronous and synchronous in JS?
Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user. You use asynchronous code when performing expensive and time-consuming operations.
 */
