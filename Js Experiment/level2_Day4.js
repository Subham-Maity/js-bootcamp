console.log('Welcome to level2_day4');
//output-Welcome to level2_day4




//concatenate

//concatenate Type- 1

//example 1
const name = 'Subham';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);
//output - Good Morning Subham

//example 2
let html;
html  = "<h1> this is heading</h1>" + "<p> this is My para</p>";
console.log(html);
//output - <h1> this is heading</h1><p> this is My para</p>




//concatenate Type- 2(concat)

html = html.concat('this' , 'str')
console.log(html);
//output - <h1> this is heading</h1><p> this is My para</p>thisstr










//length
console.log(html.length);
//output: 55










//toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript










//toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT









//index element return
var myString = 'main';
console.log(myString[2]) // start from 0 so
//output: i








//indexOf

//indexOf(char/substring)
var str3="Hi, my name is Sam!";
var str4= str3.indexOf("locate");
var str5= str3.indexOf("my");
console.log(str4)
console.log(str5)
//Output: -1
//Output: 4









//charAt():
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i










//endsWith
var myString = 'JavaScript!!!';
console.log(myString.endsWith('Script!!!'));
//output: true





//includes
var myString = 'JavaScript!!!';
console.log(myString.includes('Script!!!'));
//output: true









//substring
//substring(from, [to])
var myString = 'javascript Programming';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript











//slice
var text="programming"
var mystr= text.slice(0,4)
var mystr1 = text.slice(-4)
console.log(mystr)
console.log(mystr1)
//Output:- "prog"
//Output:- "ming"



