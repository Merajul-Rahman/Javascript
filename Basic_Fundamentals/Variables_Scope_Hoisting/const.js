// The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, 
// but if a constant is an object, its properties can be added, updated, or removed.

// Syntax
const name1 = 5;
const name2 = 7, name3 = 4, /* …, */ nameN = 100;

// Value can not be chnaged
const number = 42;
try {
  number = 99;
} catch (err) {
  console.log(err); // Expected output: TypeError: invalid assignment to const 'number'
}
console.log(number); // Expected output: 42

//Block Scoping
const MY_FAV = 7;
if (MY_FAV === 7) {
  const MY_FAV = 20; // This is fine because it's in a new block scope
  console.log(MY_FAV); // 20
}
console.log(MY_FAV); // 7

//Const in Object
const person = {name: "Shipon"}
try {
    person = {name: "Meraj"};
} catch (error) {
    console.log(error);
}

//But Objects key's are not protected so that value can be changed
person.name = "Meraj";
console.log(person);

//Even we can add other keys/properties
person.age = 25;
console.log(person);
//We would need to use Object.freeze() to make an object immutable.
Object.freeze(person);
person.age = 26;
console.log(person);

//const in Array
const Myarr = [1,2,3,4]; //we just can not reassign Myarr but can change values with index and add values using push

Myarr[2] = 5;
Myarr.push(6);
console.log(Myarr);

