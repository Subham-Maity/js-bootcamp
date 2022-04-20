console.log('We are in level2_day5');


//Accessing array elements type 1:-
let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];
console.log(marks); // output :- [ 34, 23, 24, 93, 73, 25 ]
console.log(mixed);// output :- [ 'str', 89, [ 3, 5 ] ]
console.log(fruits[1]);// output :- Apple (index start from 0)


//Accessing array elements type 2:-
const arr = new Array (23,123,21, 'Orange');
console.log(arr); //output:- [ 23, 123, 21, 'Orange' ]



//length
let age = [33,55,67,18]
console.log(age.length)//output:- 4



//isArray-array or not check
let isArray = [33,55,67,18]
console.log(Array.isArray(isArray));//output:-true
console.log(Array.isArray('subham'));//output:-false



//indexOf
let elements = [34, 23, 24, 93 ,73, 25];
let value = elements.indexOf(93);
console.log(value)//output:-3



//push-push element to the last position
let fruit = ["Banana", "Orange", "Apple"];
fruit.push('Mango');
console.log(fruit);//Output:- ["Apple", "Banana", "Orange", "Mango"]


//unshift - push element to the first position
let fruitz = ["Banana", "Orange", "Apple"];
fruitz.unshift('Mango');
console.log(fruitz);//Output:-[ 'Mango', 'Banana', 'Orange', 'Apple' ]




//pop - remove element from last
let house = ["house1","house2","house3"]
house.pop();
console.log(house);//Output:- [ 'house1', 'house2' ]






//Shift - remove element from first
let houses = ["house1","house2","house3"]
houses.shift();
console.log(houses);//Output:- [ 'house2', 'house3' ]


//splice - remove element from first to no of elements
let spl = [1,2,3,4,5,6,7,8,9,10,11] //index position -> 0 1 2 3 4 5 6 7 8 9 10
spl.splice(2,6);//start removing index position 2 (3) to total 6 elements
console.log(spl);//Output:- [ 1, 2, 9, 10, 11 ]



//reverse
let rvs = [1,2,3,4,5,6,7,8,9,10,11]
rvs.reverse();
console.log(rvs);//Output:- [11,10,9,8,7,6,5,4,3,2,1]


//concat()
let elms =[34 , 23, 24, 93, 73, 25]
let marks2 = [1, 2,3, 7]
maint = elms.concat(marks2);
console.log(maint);//output- [34, 23, 24, 93, 73, 25,  1,  2,  3,  7]



//Object Create
let myObj = {
    name: 'Subham',
    channel: 'CodeXam',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myObj) //output:object prints
console.log(myObj['channel'])//type1(if your object has space then use this) //output-CodeXam
console.log(myObj.channel)//type 2 //output-CodeXam
console.log(myObj.isActive)//type 2 //true



