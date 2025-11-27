// 1. Function vs var hoisting
console.log(foo);
var foo = 10;

function foo() {
  return 1;
}

// Output: function foo() { return 1; }
// Explanation: Function declarations are hoisted first with their body, 
// so foo refers to the function initially. Then the var declaration is hoisted but initialized to undefined, 
// which does not overwrite the function during the creation phase. Execution prints the function.


// 2. var hoisting in function scope
function testVar() {
    console.log(a);
    var a = 5;
}
testVar();
// Output: undefined
// Explanation: Inside the function, var 'a' is hoisted and initialized to undefined in the creation phase. 
// When console.log(a) executes, 'a' exists but has not been assigned yet.



// 3. let/const hoisting and TDZ
console.log(x);
let x = 20;

console.log(y);
const y = 30;

// Output:  refernace error 
// Explanation: here both x and y in the TDZ and its not accessiblke before the intitalization 


// 4. Function hoisting vs var assignment
foo2();
var foo2 = 100;
function foo2() {
  console.log("Function Foo2 called");
}

// Output:  Function Foo2 called
// Explanation: Function declarations are hoisted with their body, so foo2 refers to the function initially. 
// The var declaration is hoisted but initialized to undefined, which does not overwrite the function during the creation phase. 
// Execution prints "Function Foo2 called".

// 5. Block scope with let/const vs var
{
    var v1 = "var variable";
    let l1 = "let variable";
    const c1 = "const variable";
}
console.log(v1); // accessible
console.log(l1); // ReferenceError
console.log(c1); // ReferenceError
// Output:  
// Explanation:

// 6. Nested function & closure with hoisting
function outer() {
  console.log(a);
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
const innerFn = outer();
innerFn();

// Output:  
// Explanation:

// 7. IIFE with var & let
for (var i = 0; i < 3; i++) {
  (function(i){
    setTimeout(() => console.log("IIFE var:", i), 0);
  })(i);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("Let loop:", j), 0);
}

// Output:  
// Explanation:

// 8. Shadowing & hoisting
var a = 1;
function shadowTest() {
  console.log(a);
  var a = 2; // shadowing global a
}
shadowTest();
console.log(a);

// Output:  
// Explanation:

// 9. Multiple functions with same name + var
function dupFunc() { console.log("Func1"); }
function dupFunc() { console.log("Func2"); }
var dupFunc = 100;
console.log(dupFunc);

// Output:  
// Explanation:

// 10. Hoisting with function expressions
console.log(fooExpr);
var fooExpr = function() { console.log("fooExpr"); };

// Output:  
// Explanation:
