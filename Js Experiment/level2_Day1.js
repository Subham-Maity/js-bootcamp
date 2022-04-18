//variable in JS 

var name = 'subham';
var name2 = "subham_Xam";
var name3 = `subh'am_X"am`
console.log(name);
console.log(name2);
console.log(name3);

// Different example 
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

//const
const owenersName = 'Subham';
console.log(owenersName);
// owenersName = 'Xam'; //not possible
// console.log(owenersName);

//Experiment with let 
//type 1
var city = 'Delhi'
{
let city =  'Mumbai';
console.log(city);
}

//type 2
{
    let city =  'Mumbai';
    city = "Kerala"
    console.log(city);
    }

//type 3

    {
        let city =  'Mumbai';
        city = "Kerala"
    }
        console.log(city);

// let All 
let age = 25; // Number
let name3 = "John"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined
let age = 50;
console.log(age); // SyntaxError: identifier "age" has already been declared.



//const with array experiment 
//we can't change the array but push the element  
const arr1 = [12,23,12,53,3];
arr1.push(45);//we can do this 
arr1 = [25,226 , 23] //we can't do this
console.log(arr1);

