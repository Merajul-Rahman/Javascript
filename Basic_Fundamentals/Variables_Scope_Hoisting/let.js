// The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
//syntax
let a,b = 5, c;
let d = 1, e = d + 2;

//Scope: Let is Block Scope {}
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x); // Expected output: 2 local to its scope
}
console.log(x);

//Hoisting: let declarations can only be accessed after the place of declaration is reached tough they are hoisted but they are kept in temporal dead zone(from start of code to that variable declaration/intitalization)
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  // console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
//Using the typeof operator for a variable in its TDZ will throw a ReferenceError:


//Redeclaration: let declarations cannot be in the same scope as any other declaration, including let, const, class, function, var, and import declaration.
// let a;
