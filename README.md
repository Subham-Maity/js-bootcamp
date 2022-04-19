# JavaScript Tutorial For Beginners
## I cover all aspects of JavaScript from Basic to Pro Level
# Writer Intro
I am **Subham Maity.**

**Welcome to this book on "Learning JavaScript In 4 Steps".
I love Programming. One of the aims I had when I started ```CodeXam``` was to make learning programming easy.**

**At ```CodeXam```, we ask ourselves one question every day: "How do we create awesome learning experiences?"**

### Help us improve this guide - Fork, Pull Requests, Shares and Likes are recommended!
## Chapters
*******
*******
*******
### Level 1 (Newbie)

* [**Basic info:**](#basic-info) 


* [**VS Code and Browser Overview**](#overview)
    * [Emmet abbreviations vscode](#emmet-abbreviations-vscode)
    * [Find the class by ID](#find-the-class-by-id)
    * [Display Something](#display-something)
    * [Get Element by tag name](#get-element-by-tag-name)
    * [Find Specific Heading Element](#find-specific-heading-element)
    * [FontSize Control](#fontsize-control)
    * [Background Color Control](#background-color-control)
    * [Visibility (Hide)](#visibility-hide)
    * [Display (none)](#display-none)
* [**Console API**](#console-api)
    * [JS in HTML](#js-in-html)
    * [write HTML to the document](#write-html-to-the-document)
    * [Display the warning messages on the console](#display-an-error-message-on-the-console)
    * [display an error message on the console](#display-an-error-message-on-the-console)
    * [Clear the console](#clear-the-console)
    * [Console.assert(4==6)](#consoleassert46)
    * [Console.log print anything(string number addition)](#consolelog-print-anythingstring-number-addition)
    * [Different ways to write JavaScript](#different-ways-to-write-javascript)
    * [Console log(hello world)](#console-loghello-world)
    * [Simple Calculation](#simple-calculation)
    * [Console.log() (Different Type):-](#consolelog-different-type-)
    * [Console.table ():-](#consoletable--)
    * [Console.assert():-](#consoleassert-)
    * [Console.warn():-](#consolewarn-)
    * [Console.clear():-](#consoleclear-)
    * [Console.time() and Console.timeEnd():-](#consoletime-and-consoletimeend-)
    * [Console.error():-](#consoleerror-)
    * [Console.count():-](#consolecount-)
    * [Custom Console logs:-](#custom-console-logs-)
*******

### Level 2 (Advance)
* [**comments in JavaScript**](#comments-in-javascript)
  * [Single line comments](#single-line-comments)
  * [Multiline comments](#multiline-comments)
  
* [**Variables: let, const & var in JavaScript**](#variables-let-const--var-in-javascript)
  * [Intro](#intro)
  * [Rules](#rules)
  * [double quotes single quote and backtick](#double-quotes-single-quote-and-backtick)
  * [Var](#var-)
  * [Const](#const-)
  * [Let](#let-)
* [**Primitive and Reference Types in JavaScript**](#primitive-and-reference-types-in-javascript)
  * [Primitive](#primitive)
  * [Reference](#reference)
  * [Difference between primitive and reference datatype](#difference-between-primitive-and-reference-datatype)
  * [Experiments:-](#explicit-conversion-)
* [**JavaScript Type Conversion & Coercion**](#javascript-type-conversion--coercion)
  * [JavaScript Type Conversion:-](#javascript-type-conversion-)
    * [Explicit Conversion:-](#explicit-conversion-)
      * [Number Conversion:-](#number-conversion-)
  * [Experiments:-](#experiments-string)

*******
*******
*******


 




## Basic info

- **JavaScript which is often known as JS, is a high-level dynamic interpreted programming language.**
- **It allows client-side scripting to create completely dynamic web applications and websites.**
- **JavaScript was initially designed for making pages "alive"**
- **Scripts can be executed in the browser itself.**
- **JavaScript and Java are different programming languages**
- **It can be executed on the browser as well as the server**
  **JavaScript is a safe language when used in browser**
- **There are languages that get "transpiled" to JavaScript**




## Display an alert box:

```javascript
alert("Hello world");
```

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/1.png?raw=true"/>
        </p>
Try it on HTML(Live Server)


```html
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```
## Overview

### Emmet abbreviations vscode

Dot(.) means class and # means ID
<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/4.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/5.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/6.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/7.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/8.png?raw=true"/>
        </p>



```html
<!DOCTYPE html>
<html>
<body>

<h1>The Console Object</h1>
<div class="container">

    <button id="click">Click Me</button>
</div>
<h2>The log() Method</h2>

<p>Remember to open the console (Press F12) before you click "Run".</p>

<script>
console.log("Hello world!");
</script>

</body>
</html>

```

### Find the class by ID

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/9.png?raw=true"/>
        </p>
html

```html
<!DOCTYPE html>
<html>
<body>

<h1>The Console Object</h1>
<div class="container">

  <button id="click">Click Me</button>
</div>
<div id = "firstContainer" class="container">
  <p>This is a paragraph</p>
</div>
<h2>The log() Method</h2>

<p>Remember to open the console (Press F12) before you click "Run".</p>

<script>
console.log("Hello world!");
</script>

</body>
</html>


```
javascript

```javascript
firstContainer
```
### Display Something

####  A small piece of code that you place into your website
<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/10.png?raw=true"/>
        </p>

```javascript
firstContainer.innerHTML = "Hello Xam";
```

```javascript
firstContainer.innerHTML = "<b>Hello Xam you are bold now</b>";
```

###  Get Element by tag name

```javascript
document.getElementsByTagName('h1')
```
<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/11.png?raw=true"/>
        </p>


### Find Specific Heading Element

We can control HTML  using JS

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/12.png?raw=true"/>
        </p>

```javascript
document.getElementsByTagName('h1')[0]
```

### FontSize Control

We can control CSS also using JS

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/13.png?raw=true"/>
        </p>


```javascript
document.getElementsByTagName('h1')[0].style.fontSize = "99px"
```
### Background Color Control

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/14.png?raw=true"/>
        </p>


```javascript
document.getElementsByTagName('h1')[0].style.background = "red"

```
### Visibility (Hide)

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/15.png?raw=true"/>
        </p>

```javascript
document.getElementsByTagName ('h1')[0].style.visibility = "hidden" 
```
### Display (none)
<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/16.png?raw=true"/>
        </p>


```javascript
document.getElementsByTagName ('h1')[0].style.display = "none" 
```


don't worry we will discuss everything this is just an overview


<p align="center">
        <img src="https://media2.giphy.com/media/Y4WQSe2EucDEEUCKWu/giphy.gif?cid=ecf05e47z2taqwawluo8owrz6282ma5xno8qf6rcjvqtqftn&rid=giphy.gif&ct=g"/>
        </p>



# Console API

## JS in HTML

### Ok ! Can you tell me where we use our JS in the HTML ?

#### look at the HTML code above and just try to find out from the js file


Ok lemme tell you....hmm...

Between  script tag like this and always try to set this between body tag

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/17.png?raw=true"/>
        </p>

## Console API [ More Info [Here](https://developer.mozilla.org/en-US/docs/Web/API/Console_API) ]

### write HTML to the document

document. write() is used to write HTML to the document using Javascript. console. log() is used to log or display something to the Javascript console.

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/18.png?raw=true"/>
        </p>

```javascript
document.write("this is document write");
```
### Display the warning messages on the console

This is Wrong

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/19.png?raw=true"/>
        </p>


The correct way to write the console message is

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/20.png?raw=true"/>
        </p>

```javascript
console.warn("this is document write");
```

### display an error message on the console

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/21.png?raw=true"/>
        </p>

```javascript
console.error("This is an error");
```

### Clear the console

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/22.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/23.png?raw=true"/>
        </p>

```javascript
console.clear()
```


### Console.assert(4==6)

The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/24.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/25.png?raw=true"/>
        </p>

```javascript
console.assert(4==6)
console.assert(4==(6-8))
console.assert(4==4)
```

### Console.log print anything(string number addition)

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/26.png?raw=true"/>
        </p>

```javascript
console.log("Hello World", 4+6, "Another log");
```

## Different ways to write JavaScript

you can make another js file and write all code there and just link that to your HTMl

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/27.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/28.png?raw=true"/>
        </p>

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/29.png?raw=true"/>
        </p>

In HTML

```html
<script src="index.js"></script> 

```
In Javascript

```javascript
console.log("Hello world!");

// document.write("this is document write");
// console.warning("this is warning");
// console.warn("this is document write");
// console.error("This is an error");
// console.clear
console.log("Hello World", 4+6, "Another log");
```

It remains same don't worry

<p align="center">
        <img src="https://c.tenor.com/3a4B4YgXxIkAAAAi/dont-worry-worry.gif"/>
        </p>


## Console log(hello world)
The log() method writes (logs) a message to the console.

The log() method is useful for testing purposes.

```javascript
console.log("Hello world!");
```

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/2.png?raw=true"/>
        </p>
Try it on HTML(Live Server)


```html
<!DOCTYPE html>
<html>
<body>

<h1>The Console Object</h1>
<h2>The log() Method</h2>
<p>Remember to open the console (Press F12) before you click "Run".</p>

<script>
console.log("Hello world!");
</script>

</body>
</html>

```

## Simple Calculation

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/3.png?raw=true"/>
        </p>

### Console.log() (Different Type):-

This method is used to log(print) the output to the console. We can put anything inside the log(). 
It can be an array, object, string, boolean, etc.

Example:-
```javascript
console.log('Subham');  
console.log(1); 
console.log(true); 
console.log(null); ;  
console.log([1, 2, 3]); // array inside log
console.log({name:"Subham", language:"JavaScript", tutorial:1});
```
Output:-

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/30.png?raw=true"/>
        </p>

### Console.table ():-

To generate a table inside a console, we use console.table() method. The input must be an array or an object which will be displayed as a table. In the example, we provide the object as an input.

Example:-
```javascript
console.table({name:"Subham", language:"JavaScript", tutorial:2});
```

Output:-

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/31.png?raw=true"/>
        </p>






### Console.assert():-

This method writes a message to the console that the assertion failed and the message we provide as a parameter, but only if an expression evaluates to false. If the expression is true, then nothing will happen.

Example:-

```javascript
console.assert(0>1, "Expression is false")
```






### Console.warn():-

This method is used to log a warning message to the console. By default, the warning message will be highlighted with yellow color.

Example:-

```javascript
console.warn("This is a warning");
```







### Console.clear():-
It is used to clear the console. The console will be cleared. In the case of Chrome, a simple overlayed text will be printed on the console.

Example:-

```javascript
console.clear();
```









### Console.time() and Console.timeEnd():-
With the help of console.time() and console.timeEnd() we can find the amount of time spend by a code on execution.

Example:-

```javascript
console.time();
for (i = 0; i < 100; i++) {
  // code
}
console.timeEnd();
```
Output:-


<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/32.png?raw=true"/>
        </p>




### Console.error():-
Used to log error message to the console. Useful in the testing of code. By default, the error message will be highlighted with red color.

Example:-

```javascript
console.error("This is a simple error");
```


### Console.count():-
The console.count() method is used to count the number that the function hit by this counting method.

Example:-

```javascript
for (i = 0; i<4; i++) {
    console.count(i);
  }

```





### Console.group() and Console.groupEnd():-
group() and groupEnd() methods of the console object allow us to group contents in a separate block, indented. Just like the time() and the timeEnd(), they also accept the label, again of the same value.

Example:-

```javascript
console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section');

```







### Custom Console logs:-
If the user has even a little idea about CSS, they can add Styling to the console logs to make logs Custom. The Syntax for it is to add the CSS styling as a parameter to the logs, which will replace %c in the logs as shown in the example below:

Example:-

```javascript
const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Harry', mystyle);
```









# Level 2 

<p align="center">
        <img src="https://c.tenor.com/xatLP2moOZIAAAAC/perq-ai-leasing-assistant.gif"/>
        </p>


# comments in JavaScript

## Single line comments
To create a single line comment in JavaScript, we have to place two slashes "//" in front of the code or text that we want the interpreter to ignore. When we place these two slashes, all text will be ignored, until the next line. Single line comments are used for writing small notes in the program

```javascript
// This is a single line JavaScript comment
```

## Multiline comments
Although a single line comment is quite useful, but when we want to comment the long segment of code, we have to use multiline comment.  Multiline comment begins with /* and ends with */.

```javascript
/*
This is a Multiline Comment
This is a Multiline Comment
This is a Multiline Comment
 */
```




# Variables: let, const & var in JavaScript
## Intro
As we know, that variable is the name of the storage location. When we want to save some data, we store it in a variable. In any programming language, we typically do lots of calculations. The calculation results are stored in the computer's memory. Just like human memory, the memory of the computer also consists of millions of cells. The calculated values are stored in these memory cells. To make the usage and retrieval of these values easy, these memory locations are given names. The names given to these locations are called variables.

Data types in JavaScript are either Variables or Constants. ES6 has made major changes in JavaScript's syntax and has also brought new features. Initially, we used to declare variables with a keyword "var". However, ES6 has brought a new variable declaration keyword, "let" and "const."
## Rules
**Following are some rules while declaring a JavaScript variable:**

1.A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign.

2.A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.

3.JavaScript variables are case sensitive. For example, a and A are different variables.

## Var:-

Before the advent of ES6, var declarations were used to declare a variable. The properties of var is that it has visibility linked to the function to which it belongs. We can change its value, and it can be redeclared in the same scope. Scope means where these variables are available for use. There are two types of scope, local and global. Var declarations are globally scoped, and when they are defined inside a function, they are locally scoped.



### Firstly, let's create a variable and store a name, then print it out (console)

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/33.png?raw=true"/>
        </p>

### double quotes single quote and backtick

You can use single or double quotes:

backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/34.png?raw=true"/>
        </p>



```javascript
//variable in JS 

var name = 'subham';
var name2 = "subham_Xam";
var name3 = `subh'am_X"am`
console.log(name);
console.log(name2);
console.log(name3);
```

**Another example**

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/35.png?raw=true"/>
        </p> 

**remember if we just declare without initialize it's fine like var x;**

```javascript
//variable in JS

var x = 5;
var y = 6;
var z = x + y;
console.log(z);

```

## Const:-
Const is also introduced in ES6. It is a variable type assigned to data whose value cannot and will not be changed throughout the program. Const is more strict as compared to var and let. Const is also limited to the scope in which it operates. We declare const just like var and let. We use const when we are sure a variable will not be redeclared. The characteristic of const and their declarations are block-scoped, and they cannot be updated or redeclare.

**A const variable cannot be reassigned like var** 


<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/36.png?raw=true"/>
        </p> 

**remember if we just declare without initialize it's not fine :( you have to initialize ;**

```javascript
//const
const owenersName = 'Subham';
console.log(owenersName);
owenersName = 'Xam'; //not possible
console.log(owenersName);

```

another example with array 

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/40.png?raw=true"/>
        </p> 

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/41.png?raw=true"/>
        </p> 

```javascript
const arr1 = [12,23,12,53,3];
arr1.push(45);//we can do this 
arr1 = [25,226 , 23] //we can't do this 
console.log(arr1);

```





## Let:-

The variable type let is introduced in ES6. It shares a lot of similarities with var, but unlike var, it has scope constraints. Its declaration and assignment are similar to var. The purpose of introducing let is to resolve all issues posed by variables scope, which developers face during development. The properties of let are that They have visibility linked to the block they belong with. We can change their values, but they cannot be redeclared in the same scope, unlike var.

"let" helps us by making it easier to see where variables live in our code and make our code cleaner and easier to read.

**The let keyword was introduced in ES6 (2015).**

**Variables defined with let cannot be redeclare.**

**Variables defined with let must be Declared before use.**

**You cannot accidentally redeclare a variable**

**Variables defined with let have Block Scope.**


**remember if we just declare without initialize it's not fine :( you have to initialize ;**

### Why let data is the output instead of var data ?

#### Type 1
<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/37.png?raw=true"/>
        </p> 

```javascript
var city = 'Delhi'
{
let city =  'Mumbai';
console.log(city);
}
```

because let have Block Scope so when you use console inside the parenthesis , console never go for global variable

#### Type 2

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/38.png?raw=true"/>
        </p> 

```javascript
{
    let city =  'Mumbai';
    city = "Kerala"
    console.log(city);
    }

```

Similarly, in this case also, the let data is changed inside the block, so console just prints the changed data, and still it's not going for the global one var


#### Type 3

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/39.png?raw=true"/>
        </p> 

```javascript
var city = 'Delhi'

    {
        let city =  'Mumbai';
        city = "Kerala"
    }
        console.log(city);


```

In this case , the let data is changed inside the block, but console is now outside the block, so it's going for the global one var


### let experiments 

```javascript
let age = 25; // Number
let name = "John"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined
let age = 50;
console.log(age); // SyntaxError: identifier "age" has already been declared.
```
#  Primitive and Reference Types in JavaScript

## Primitive 
These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods.

- Numbers
- String
- Boolean
- Null
- Undefined
- Symbols

## Reference
Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.

Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.
- Objects
- Functions
- Collections
- Arrays
- Dates
- Other types of objects...

## Difference between primitive and reference datatype
- **JavaScript** stores the primitive value on the stack because the size of a primitive value is fixed. On the other hand, JavaScript stores the reference value on the heap because the size of the reference value is dynamic.

- **One** of the most significant differences between primitive data and reference data is that, If the value is primitive, then we manipulate the actual valuestored in that variable. Whereas, If the value is of reference data type, we can manipulate that object's reference, rather than the actual object. It means a variable that stores an object is accessed by reference.
## Experiments
```javascript
/* Data types in JS
Primitive Datatype stored in stack
Primitive values (immutable datum represented directly at the lowest level of the language)
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type


Reference Datatype stored in heap
Objects
Functions
Collections
Arrays
Dates
Other types of objects...
*/
//*** Primitive Datatype ***
//String
var name = "subham";
console.log("String value is " + name);

//specify the data type
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34;
let mark = 34.4;
console.log("Data type is " + (typeof marks));
console.log("Data type is " + (typeof mark));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));



//*** Reference Data Types ***
// Arrays
let myArr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myArr));

// Object Literals
let setMarks = {
    Subhasish: 89,
    Shubham: 98,
    Bikram: 88
}
console.log( typeof setMarks);

// Function
function findName() {
}
console.log( typeof findName);


//Date
let date = new Date();
console.log( typeof date);
```

### Output

```text
String value is subham
Data type is string
Data type is number
Data type is number
Data type is boolean
Data type is object
Data type is undefined
Data type is object
object
function
object
```

# JavaScript Type Conversion & Coercion
we will learn about type conversions and coercion in JavaScript with examples. JavaScript is a programming language used to build dynamic web pages. In this language, we do not have to specify the data type when we declare it. We can assign new data of a different type to the same variable. Under some circumstances, JavaScript will perform automatic type conversion. Typecasting/Type conversion and coercion in simple terms means changing the data type of a value to another data type like an integer to string, Boolean into String, etc.
##  JavaScript Type Conversion:- 
When we convert one data type to another data type, this process is called type conversion. In JavaScript, there are two types of type conversion.
## Explicit Conversion:-
The type conversion that we manually do is known as explicit type conversion. In JavaScript, explicit type conversions are done using the built-in methods like String (), Number(), etc.
### Number Conversion:-
To convert Boolean values or numeric strings to numbers, we use the Number() i.e. an in-built method. Number() method in case of empty strings and null values return 0. If a string is an invalid number like having an alphabet in a string, the result will be NaN. 

### The following are the rules of the numeric value:

| **Value**        | **Return**                                                                                                                                                                                                                       |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| undefined        | NaN                                                                                                                                                                                                                              |
| null             | 0                                                                                                                                                                                                                                |
| true and false   | 1 and 0                                                                                                                                                                                                                          |
| string           | Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0.<br/> Otherwise, the number is “read” from the string.  If the string contain any alphabet like 67a90, it will give NaN error. |

## Experiments (Type Casting)
```javascript
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
```
### Output
```text
Welcome to level2_day3
2 number
2 string
true string
Tue Apr 19 2022 03:01:29 GMT+0530 (India Standard Time) string
5 object
9 string
75
3434 string
3434 number
NaN number
1 number
0 number
34.098 string
34.09877 number
34 number
34.098 number
34.097999999999998976818460505456 number
732

```

# Strings: Properties, Methods & Template Literals in JavaScript 
As we know, strings are useful for holding data that can be represented in text form. One of the most popular operations on strings are to check their length, to build and concatenate them using the operator (+), checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method. In this tutorial, we will also learn about JavaScript template literals that makes it easier to work with the string template.


**Note that**: JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, and so on.


## JavaScript String Methods:-

### 1. charAt(c):
It returns the character at the “c” position within the string.

```javascript
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i
```
### 2.concat(p1, p2):
Combines one or more strings and returns the concatenated string. Remember that the original string is not modified.

```javascript
var str1="JavaScript"
var str2=str1.concat(" is","awesome")
console.log(str2);
//Output: JavaScript is awesome
```
### 3.indexOf(substr, [start_from]):
This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.

```javascript
//indexOf(char/substring)
var str1="Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1
```

### 4.indexOf(substr, [start_from]):
This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.

```javascript
//indexOf(char/substring)
var str1="Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1
```

### 5.indexOf(substr, [start_from]):
This method Searches and returns the index number of the searched character within the string. If not found, it will return -1 . “Start_from” is an optional argument specifying the position within string to begin the search. Default is 0.


```javascript
//indexOf(char/substring)
var str1="Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1
```

### 6.lastIndexOf(substr, [start_from]):
This method searches and  returns the index number of the searched character within the string. This method will return the index of the last occurrence of a specified text in a string.If the character or string is not found, -1 is returned. "Start_from" is an optional argument specifying the position within string to begin the search. Default is string.length-1

```javascript
var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));
//output: 11
```

### 7.slice(start, [end]):
This method returns a substring of the string based on the "start" and "end" index , it will not include the "end" index itself. "End" argument is optional, and if none is specified, the slice includes all characters from "start" to end of string.

```javascript
//slice
var text="programming"
var mystr= text.slice(0,4)
var mystr1 = text.slice(-4)
console.log(mystr)
console.log(mystr1)
//Output:- "prog"
//Output:- "ming"
```

### 8.split(delimiter, limit):
This method Splits a string into substring to the specified delimiter, and returns an array containing each element. The argument “limit” is an integer that lets you specify the maximum number of elements to return.

```javascript
//split
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
console.log(txt)
var txt2 = "m,n,o,p,q";
txt2.split(" ");          // Split on spaces
console.log(txt2)
```

### 9.substring(from, [to]):
This method will return the characters in a string between “from” and “to” indexes. It will not include “to” itself. “To” argument is optional, and if omitted, up to the end of the string is assumed.

```javascript
//substring(from, [to])
var myString = 'javascript Programming';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript
```

### 10.toLowerCase():


```javascript
//toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript
```

### 11.toUpperCase():


```javascript
//toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT
```

### 12.search(“str”):
The method searches a string for a specified value and returns the position of the match:

```javascript
var str = "Welcome to programming World!!";
var pos = str.search("programming");
```

### 13.substr() Method:
The method substr() is similar to slice(). The only difference is that the second parameter specifies the length of the extracted part.

```javascript
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
// Output: Banana
```

### 14.String length Method:
string length return

```javascript
let html;
html  = "<h1> this is heading</h1>" + "<p> this is My para</p>";
console.log(html.length);
```


### 15.JavaScript template literals:-

Prior to ES6, we use single quotes (') or double quotes (") to wrap a string literal. At that time, the strings have very limited functionality. To help us in solving more complex problems, ES6 template literals provide the syntax that allows you to work with strings in a much cleaner way. In ES6, we can create a template literal by wrapping the string in backticks as follows:

```javascript
let simple = `This is an example of
                     Template literal`;
```
Following are the features of javascript template literals:

We can write a Multiline string
It provides the ability to substitute part of the string for the values of variables or expressions. This feature is also called string interpolation.
It provides the ability to transform a string so that it is safe to include in HTML.

```javascript
//template literals
//example 1
let firstName = 'Code',
        lastName = 'Xam';
let greetings = `Welcome to ${firstName} ${lastName}`;
console.log(greetings);
//outputWelcome to Code Xam

//example 2
let fruit1 = 'Orange\'' ;
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
<h1> This is' "my" heading </h1>
<p> You like ${fruit1} and $
{fruit2}`;
document.body.innerHTML = myHtml;

```
<p align="center">
        <img src="https://github.com/Subham-Maity/js-bootcamp/blob/master/Image(ignore)/43.png?raw=true"/>
        </p>


### 16.Index Element Return
Index Element return 

```javascript
var myString = 'main';

console.log(myString[2]) // start from 0 so
```

### 16.endsWith
return true if it's available 
```javascript
//endsWith
var myString = 'JavaScript!!!';
console.log(myString.endsWith('Script!!!'));
//output: true
```

### 17.includes 
return true if it's available
```javascript
//includes
var myString = 'JavaScript!!!';
console.log(myString.includes('Script!!!'));
//output: true
```
### 18.Replace
Replace first occurrence 
```javascript

//replace
var htmlt = "<h1> this is heading</h1>" + "<p> this is My para</p>";
console.log(htmlt.replace('this', 'it'));
//output - <h1> it is heading</h1><p> this is My para</p>

```





