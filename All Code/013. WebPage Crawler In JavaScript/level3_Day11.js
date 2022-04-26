console.log('Exercise 11');

// let a = document.links;
// for(i=0; i<a.length; i++){
//     let string =a[i].toString() ;
//     if(string.includes('Subham')){
//         console.log(a[i]);
//     }
// }
let string="Subham";

a=document.links;
Array.from(a).forEach(function(item){
    if(item.href.includes(string)){
        console.log(item);
    }
});