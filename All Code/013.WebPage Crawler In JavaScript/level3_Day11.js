console.log('Exercise 11');

let a = document.links;
for(i=0; i<a.length; i++){
    let string =a[i].toString() ;
    if(string.includes('Subham')){
        console.log(a[i]);
    }
}