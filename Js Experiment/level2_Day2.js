/* Data types in JS
Primitive Datatype stored in stack
Primitive values (immutable datum represented directly at the lowest level of the language)
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type


Reference Datatype stored in heap
Objects
Functions
Collections
Arrays
Dates
Other types of objects...
*/
//*** Primitive Datatype ***
//String
var name = "subham";
console.log("String value is " + name);

//specify the data type
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34;
let mark = 34.4;
console.log("Data type is " + (typeof marks));
console.log("Data type is " + (typeof mark));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));



//*** Reference Data Types ***
// Arrays
let myArr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myArr));

// Object Literals
let setMarks = {
    Subhasish: 89,
    Shubham: 98,
    Bikram: 88
}
console.log( typeof setMarks);

// Function
function findName() {
}
console.log( typeof findName);


//Date
let date = new Date();
console.log( typeof date);
