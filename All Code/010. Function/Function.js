console.log('this is day8');


// Basic function


/*
// This is the hectic process to send a same message for every single guy so for that reason we need function


let name = 'Subham';
let name2 ='Rohan';

console.log(` Happy Birthday ${name}
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you.
Happy birthday!`);

console.log(`Happy Birthday ${name2}
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you.Happy birthday!`);

*/

function greet (name , thanks){//here name is our parameter
    console.log(`Happy Birthday ${name}
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you. ${thanks}!`);
    return 4;
}

let name  = "Subham"//arguments
let name2 = "Rohan "//arguments
let thank = "Thanks a lot"//arguments


//function call
let val = greet(name, thank ) //call greet function by passing arguments
console.log(val)//return value "4" store here
let nal = greet(name2, thank)//call greet function by passing arguments
console.log(nal) //return value "4" store here


/*
output:-
Happy Birthday Subham

How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you. Thanks a lot!
4
Happy Birthday Rohan
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you. Thanks a lot!
4
*/







//Similarly, you can do like this [function as a variable]

const mygreet = function  (names , thankss){//here name is our parameter
    console.log(`Happy Birthday ${names}
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you. ${thankss}!`);
    return 4;
}

let names  = "Subham"//arguments
let names2 = "Rohan "//arguments
let thanks = "Thanks a lot"//arguments


//function call
let vals = mygreet(names, thanks ) //call greet function by passing arguments
console.log(vals)//return value "4" store here
let nals = mygreet(names2, thanks)//call greet function by passing arguments
console.log(nals) //return value "4" store here

/*output
Happy Birthday Subham
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you. Thanks a lot!
4
Happy Birthday Rohan
How I wish I could fly to you right
now and be with you on this special
day of yours. But remember, my good
wishes are always there with you. Thanks a lot!
4
*/










//Function inside the object

const myObj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myObj.game())//output: GTA














//Function inside array
arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
}
);
/*
//output:-

fruit 0
vegetable 1
furniture 2
*/








//additional
if(1){
    var i =234; // it's global, so we can access if it's let then we can't access
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("codeXam"), i)

//output
/*
234
234
9
This is a codeXam ui 234

 */







