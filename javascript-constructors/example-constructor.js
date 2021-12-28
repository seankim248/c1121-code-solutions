function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log(newConstructor);
var isPrototype = newConstructor instanceof ExampleConstructor;
console.log(isPrototype);
