//Variables can be declared using three keyword: var, let and const

//Var declares functon scopped or globally scopped variables 
//Syntax
var a, b = 5, c=x, d;

//Scope
var a = 10; //global scope
{
    var x = 20; //also global scope.
}

function abc()
{
    var x = 100; //function scope, can not be used outside function
    function bcd(){
        var y = 200;
        console.log(x); //100  as bcd is inside abc bcd can access the variables of abc
        console.log(y); //200
    }
    bcd();
    console.log(x);
    // console.log(y); //will show reference error as y is not in abc's scope.
}
abc();
console.log(x) //output 20 from the global scope.


//Redeclarations
//Var can be used to redeclare the same variable again. 
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x); // Expected output: 2
}
console.log(x); // Expected output: 2

//Redeclarations holds the previous value
var redeclare = 10;
var redeclare;
console.log(redeclare);

//Variables created using var are added to a global object (window in browser) var a = 10 means window.a = 10. So it is not-configurable and it can not be delete using delete keyword.
// JS manages its own memeory so variable deletion is not necessary
var myVar = 5;
console.log(Object.hasOwn(globalThis,"myVar"));

delete myVar;  // ❌ Doesn't work. Variable still exists.
console.log(myVar); // ✅ Still prints 5

//A single var line with multiple variables is a binding list, not multiple statements.
// You can use earlier variables when declaring later ones in the same list.
var a=1, b = a + 1, c = b + 2; // a = 1 b = 1+1, c = 2+2

//Hoisting: Var is hoisted and initialized with value: undefined so it can be accessed before its initialization but the value will show undefined
 console.log(hoisting)
 var hoisting = 10;
 console.log(hoisting);

 // If the var variable has same name as function then the variable will output the value of the variable as the initialization of variables happens after the functions initialization
var a = 1;
function a() {}
console.log(a); // 1

//var x = y = 1 syntax — y is not actually declared as a variable, so y = 1 is an unqualified identifier assignment, which creates a global variable in non-strict mode.

var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

