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


//another example

const  alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
  console.log(alpha[i]);
}