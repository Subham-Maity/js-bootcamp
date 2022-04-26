console.log('Welcome to day 12');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/
let element = document.getElementById('myfirst');


/*1. Single element selector*/
// let element = document.getElementById('myfirst');
// console.log(element);

/*2. element = element.className;*/
// element = element.childNodes;
// element = element.parentNode;
// console.log(element);


/*3.color change*/
// element.style.color = 'red';
// element.innerText = 'Subham is a good boy';
// console.log(element);

/*4.Inner HTML*/
// element.innerHTML = '<b>Subham is a good boy</b>';
// console.log(element.innerText);


/*5.Inner HTML Grab*/
// element.innerHTML = '<b>Subham is a good boy</b>';
// console.log(element.innerHTML);


/*6.QuerySelector*/
// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div'); ////only first div you can get
// /*7.div color change */
// sel.style.color = 'green';
// console.log(sel)



/*8. Multi element selector*/
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems[1].getElementsByClassName('child'))




/*9.Bold all div contains */

//
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems[0].getElementsByClassName('child'))
// console.log(elems[1].getElementsByClassName('child'))
//
//
//
//
//
// /*for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'blue';
// }*/
//
//
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue';
// });




