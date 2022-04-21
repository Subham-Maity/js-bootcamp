console.log("We are at tutorial 9");

//for loop
let a =34;
a +=1;
a++;
console.log(a); //34+1+1


for(let i=0; i<100;i++){
    console.log(i);//Output: print 0-99
}


//While Loop
let j = 0;
while (j < 100) {
  console.log(j+1 );//Output:- 1-100 print
  j += 1;
}



// Do while loop
    let k = 0;
    do {
        console.log(k + 1);
        k +=1;
    } while (k < 10);//Output:- 1-10 print



//break -> where you got 5 break the loop
for (let i = 0; i < 100; i++) {
    console.log(i); //Output:- 0-90
    if (i === 90) {
        break;
    }
}


//continue :- Skipping an Iteration

let g = 0;
do {
    if(g===5){
        g +=1;
        continue;
    }
    console.log(g + 1); //output :- it's gonna print only 1-10 and skip the 6
    g +=1;
} while (g < 10);
console.log('done');




//foreach
let arr = [2,5,6,4,2,3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function(element, index, array){
    console.log(element, index, array);
    }
);
/*output:-
2 0 [ 2, 5, 6, 4, 2, 3 ]
5 1 [ 2, 5, 6, 4, 2, 3 ]
6 2 [ 2, 5, 6, 4, 2, 3 ]
4 3 [ 2, 5, 6, 4, 2, 3 ]
2 4 [ 2, 5, 6, 4, 2, 3 ]
3 5 [ 2, 5, 6, 4, 2, 3 ]
*/



//The for… in Loop
let obj = {
    name: "Mr.NasaHacker",
    age: 13,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}

console.log('done');
/*output:-
The name of object is Mr.NasaHacker
The age of object is 13
The type of object is Dangerous Programmer
The os of object is Ubuntu
done

*/
