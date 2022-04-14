//Console.log():-

console.log('Subham');  
console.log(1); 
console.log(true); 
console.log(null); ;  
console.log([1, 2, 3]); // array inside log
console.log({name:"Subham", language:"JavaScript", tutorial:1}); // object inside log




//Console.table ():-

console.table({name:"Subham", language:"JavaScript", tutorial:2});





//Console.assert():-
console.assert(0>1, "Expression is false")





//Console.warn():-
console.warn("This is a warning");





//Console.clear():-
console.clear();




//Console.time() and Console.timeEnd():-
console.time();
for (i = 0; i < 100; i++) {
  // code
}
console.timeEnd();




//Console.error():-
console.error("This is a simple error");




//Console.count():-
for (i = 0; i<4; i++) {
    console.count(i);
  }

 

//Console.group() and Console.groupEnd():-
console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section');



//Custom Console logs:- 
const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Harry', mystyle);



for (i = 0; i<4; i++) {
    console.count(i);
  }