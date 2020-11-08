//context vs scope
//scope example
function b() {
  let a = 4;
}
//console.log(a); Reference error cause of scope
//context tells you where we are within the object
function a() {
  console.log(this);
}
//a(); global object
//In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.

const object4 = {
  a: function () {
    console.log(this);
  },
};
object4.a();
//The this references the object of which the function is a property. In other words, the this references the object that is currently calling the function.
