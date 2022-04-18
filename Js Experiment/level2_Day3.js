console.log('Welcome to level2_day3');


// *** Type conversion ***

//int -> String

let myVar = 2;
console.log(myVar, (typeof myVar));
myVar = String(2);
console.log(myVar, (typeof myVar));








//Boolean -> String
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));








//date(object) ->string
/*
let date = new Date();
 console.log(date, (typeof date)); //date and object
*/
let date = String(new Date());
console.log(date, (typeof date));









//Array -> String
//here array elements are counting so array length is 5 and type is object
let array =  ([1,2,3,4,5]);
console.log(array.length, (typeof array));

//here parentheses are also counting as a string length so array length is 9 and type is string
let arr =  String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));









//Use toString function to convert
/* you can use anything for converting to string */
// let i = new date;
// let i = false;
let i = 75;
console.log(i.toString());









//String -> Number
let stri ="3434";
console.log(stri, (typeof stri));
let strings =Number("3434");
console.log(strings, (typeof strings));













//NaN - Not a Number
let string =Number("34S34");
console.log(string, (typeof string));












//True-false-1-0 -> number
let stringT =Number(true); //true -> 1
console.log(stringT, (typeof stringT));

let stringF =Number(false); //false -> 0
console.log(stringF, (typeof stringF));













//parseInt -> int
//normal string
let number1 = '34.098';
console.log(number1, (typeof number1));

//convert to number
let number1_1 = Number('34.09877');
console.log(number1_1, (typeof number1_1));

//only return 34 because it's integer data type
let number2 = parseInt('34.09877');
console.log(number2, (typeof number2));












//parseFloat -> float
let number3 = parseFloat('34.098');
console.log(number3, (typeof number3));













//toFixed_factionDigits
let number4 = parseFloat('34.098');
console.log(number4.toFixed(30), (typeof number4));

















// Type coercion -> concatenate-string-int
//if  we try to concatenate string with int it will change to string and concatenate with string
//like string = "28" int = 24  (String + int) = 2824
//so convert first then concatenate
let str5 = Number("698");
let myNum = 34;
console.log(str5 + myNum);