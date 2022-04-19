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
//output - 55


// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

// let fruit1 = 'Orange\'';
// let fruit2 = 'Apple';
// let myHtml = `Hello ${name}
//             <h1> This is "my" heading </h1>
//             <p> You like ${fruit1} and ${fruit2}`;
//
// document.body.innerHTML = myHtml;