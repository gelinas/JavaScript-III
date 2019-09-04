/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding: when in the global scope, 'this' refers to the entire environment. 'use strict' prevents issues that result from global binding
* 2. implciit binding: when a function is called, the left of the dot is the 'this'. So any 'this' references in the function will look for the attributes in the object preceeding the dot.
* 3. new binding: if a contructor function contains a method with 'this', and the constructor function is used to make a new object, and the method is called on the new object... the 'this' will refer to the attributes of the new object.
* 4. Explicit binding: use .call(obj) and .apply(obj) to override the 'this' from the other principles, and set the attributes 'this' references to be the ones called/applied
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globalThis(input) {
    console.log(this);
    return input;
  }
globalThis("hello world");

// Principle 2

// code example for Implicit Binding

const newObj = {
    name: "new",
    item: "object",
    context: "example",
    implicitBind: function() {
        console.log(`My name is ${this.name}`);
    }
}

newObj.implicitBind();

// Principle 3

// code example for New Binding

function ConstructPerson(person, gender) {
    this.name = person,
    this.gender = gender,
    this.speak = function() {
        console.log(`${this.name} is a ${this.gender}`);
    };
}

const louis = new ConstructPerson('Louis', 'man');

louis.speak();

// Principle 4

// code example for Explicit Binding

const julia = new ConstructPerson('Julia', 'woman');

julia.speak(); // new binding
julia.speak.call(louis); // explicit binding