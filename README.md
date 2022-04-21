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
  * [Experiments:-](#experiments-type-casting)
* [**Strings: Properties, Methods & Template Literals in JavaScript**](#strings-properties-methods--template-literals-in-javascript)

   * **Method**

  * [1. charAt(c):](#1-charatc)
  * [2.concat(p1, p2):](#2concatp1-p2)
  * [3.indexOf(substr, [start_from]):](#3indexofsubstr-start_from)
  * [4.lastIndexOf(substr, [start_from]):](#4lastindexofsubstr-start_from)
  * [5.slice(start, [end]):](#5slicestart-end)
  * [6.split(delimiter, limit):](#6splitdelimiter-limit)
  * [7.substring(from, [to]):](#7substringfrom-to)
  * [8.toLowerCase():](#8tolowercase)
  * [9.toUpperCase():](#9touppercase)
  * [10.search(“str”):](#10searchstr)
  * [11.substr() Method:](#11substr-method)
  * [12.String length Method:](#12string-length-method)
  * [13.JavaScript template literals:-](#13javascript-template-literals-)
  * [14.Index Element Return](#14index-element-return)
  * [15.endsWith](#15endswith)
  * [16.includes](#16includes)
  * [17.Replace](#17replace)

     [Experiments:-](#experiment-string)

* [**Arrays and Objects In JavaScript**](#arrays-and-objects-in-javascript-)
  * [**Accessing array elements:**](#accessing-array-elements-)
  * [**Method**](#method-)
    * [Length of an Array](#length-of-an-array)
    * [indexOf](#indexof-)
    * [sort](#sort)
    * [reverse](#reverse)
    * [concat](#concat)
    * [push](#push)
    * [pop](#pop-)
    * [shift](#shift-)
    * [unshift](#unshift-)
    * [splice](#splice)
    * [isArray](#isarray)
  * [**JavaScript Object**](#javascript-object-)
  * [**The syntax for accessing the property of an object is:**](#the-syntax-for-accessing-the-property-of-an-object-is)
  * [**Experiment(Arrays and objects)**](#experimentarrays-and-objects)
* [**Operators**](#operators)

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

### 4.lastIndexOf(substr, [start_from]):
This method searches and  returns the index number of the searched character within the string. This method will return the index of the last occurrence of a specified text in a string.If the character or string is not found, -1 is returned. "Start_from" is an optional argument specifying the position within string to begin the search. Default is string.length-1

```javascript
var myString = 'javascript Node.js';
console.log(myString.lastIndexOf('N'));
//output: 11
```

### 5.slice(start, [end]):
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

### 6.split(delimiter, limit):
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

### 7.substring(from, [to]):
This method will return the characters in a string between “from” and “to” indexes. It will not include “to” itself. “To” argument is optional, and if omitted, up to the end of the string is assumed.

```javascript
//substring(from, [to])
var myString = 'javascript Programming';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript
```

### 8.toLowerCase():


```javascript
//toLowerCase()
var myString = 'JAVASCRIPT';
myString = myString.toLowerCase();
console.log(myString)
//output: javascript
```

### 9.toUpperCase():


```javascript
//toUpperCase()
var myString = 'javascript';
myString = myString.toUpperCase();
console.log(myString)
//output: JAVASCRIPT
```

### 10.search(“str”):
The method searches a string for a specified value and returns the position of the match:

```javascript
var str = "Welcome to programming World!!";
var pos = str.search("programming");
```

### 11.substr() Method:
The method substr() is similar to slice(). The only difference is that the second parameter specifies the length of the extracted part.

```javascript
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
// Output: Banana
```

### 12.String length Method:
string length return

```javascript
let html;
html  = "<h1> this is heading</h1>" + "<p> this is My para</p>";
console.log(html.length);
```


### 13.JavaScript template literals:-

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


### 14.Index Element Return
Index Element return 

```javascript
var myString = 'main';

console.log(myString[2]) // start from 0 so
```

### 15.endsWith
return true if it's available 
```javascript
//endsWith
var myString = 'JavaScript!!!';
console.log(myString.endsWith('Script!!!'));
//output: true
```

### 16.includes 
return true if it's available
```javascript
//includes
var myString = 'JavaScript!!!';
console.log(myString.includes('Script!!!'));
//output: true
```
### 17.Replace
Replace first occurrence 
```javascript

//replace
var htmlt = "<h1> this is heading</h1>" + "<p> this is My para</p>";
console.log(htmlt.replace('this', 'it'));
//output - <h1> it is heading</h1><p> this is My para</p>

```


## Experiment (String)
```javascript
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










//split
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
console.log(txt)
var txt2 = "m,n,o,p,q";
txt2.split(" ");          // Split on spaces
console.log(txt2)








//replace
var htmlt = "<h1> this is heading</h1>" + "<p> this is My para</p>";
console.log(htmlt.replace('this', 'it'));
//output - <h1> it is heading</h1><p> this is My para</p>













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
**Output**

```text
Welcome to level2_day4
Good Morning Subham
<h1> this is heading</h1><p> this is My para</p>
<h1> this is heading</h1><p> this is My para</p>thisstr
55
javascript
JAVASCRIPT
i
-1
4
i
true
true
javascript
prog
ming
a,b,c,d,e
m,n,o,p,q
<h1> it is heading</h1><p> this is My para</p>
Welcome to Code Xam

```
# Arrays and Objects In JavaScript:-


Arrays are the objects in which we can store multiple values in a single variable. An array stores a sequential collection of elements of fix sizes. There are two syntaxes used for creating an empty array:
```javascript
let arr = new Array();
let arr = [];
```
## Accessing array elements:-
Arrays are zero-indexed. The first element of an array is store at 0 indexes and the second element store at index 1 and so on. If we use an invalid index number it returns undefined.
```javascript
let arr = ['first element', 'second element', 'last element']
console.log(arr[0]) // output ' first element'
console.log(arr[1]) //  output ' second element'
console.log(arr[arr.length - 1]) //  output ' last element'
```

## Method:-

### Length of an Array
The property length sets or returns the number of elements in an array.
```javascript
let age = [33,55,67,18]
console.log(age.length)
```
### indexOf():-
This method Search the array for an element and returns its position

```javascript
let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("John");
```
###  sort():
This method is used to sort the elements of an array

```javascript
let age = [33,55,67,18]
let s_age= age.sort(age)
//18,33,55,67
```
### reverse():
This method is used to reverses the element of an array. The first array element becomes the last and the last becomes the first.

```javascript
let age = [33,55,67,18]
let r_age= age.reverse(age)
//18,67,55,33
```
### concat():
This method will returns a new array comprised of this array joined with an other array or value

```javascript
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3
```
Here are some methods which are used to modify an array. Remember that, when we modify an array, we are modifying the original array.
### push():
This method is used to add an item to the end of an Array

```javascript
let fruits = ["Banana", "Orange", "Apple"];
let len = fruits.push('Mango')
// ["Apple", "Banana", "Orange", "Mango"]
```

### pop():-
This method is used to remove an item from the end of an Array

```javascript
let last = fruits.pop() // remove Mango (from the end)
["Apple", "Banana", "Orange"]
```

###  shift():-
This method is used to remove an item from the beginning of an Array

```javascript
let first = fruits.shift() // remove Apple from the front
// ["Banana", "Orange"]
```

### unshift():-
This method is used to add an item to the beginning of an Array

```javascript
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana", "Orange"]
```

### splice():
This method is used to remove an item by index position

```javascript
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Orange"]
```
### isArray():
This method is used to check it's array or not

```javascript
let isArray = [33,55,67,18]
console.log(Array.isArray(isArray));//output:-true
console.log(Array.isArray('subham'));//output:-false
```

##  JavaScript Object:-
In JavaScript, Object is a non-primitive data type. The object is like other variables, but the only difference is that an object holds multiple values, arrays, functions etc. We create an object with figure brackets {…} with an optional list of properties. A property is a "key: value" pair, where the key is a string/ property name, and value can be anything.

The syntax of creating object are following:-
```javascript
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

### Example :-


```javascript
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
```
In the user object, there are three properties:

- The first property has the name "name" and the value "Harry".
- The second property has the name "age" and the value 25.
- The third one has the name "language" and the value "JavaScript".

## The syntax for accessing the property of an object is:

## The dot notation (.)
The syntax of dot notation to access a property of an object is:
```javascript
objectName.property
```
For example, to access the "name" property of the user object, we use the following expression:
### Array-like notation ( []):
The syntax to access the value of an object’s property via the bracket notation is:

```javascript
objectName['propertyName'];
```
For example:

```javascript
console.log(user['name']);
console.log(user['age']);
```
To change the value of a property, you use the assignment operator. For example:
```javascript
user.age = 27;
```
## Experiment(Arrays and objects)


```javascript
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




```

**Output**

```text
We are in level2_day5
[ 34, 23, 24, 93, 73, 25 ]
[ 'str', 89, [ 3, 5 ] ]
Apple
[ 23, 123, 21, 'Orange' ]
4
true
false
  25,  1,  2,  3,  7
]
{
  name: 'Subham',
  channel: 'CodeXam',
  isActive: true,
  marks: [ 1, 5, 3, 6 ]
}
CodeXam
CodeXam
true

  34, 23, 24, 93, 73,
Process finished with exit code 0
]
{
  name: 'Subham',
  channel: 'CodeXam',
  isActive: true,
  marks: [ 1, 5, 3, 6 ]
}
CodeXam
CodeXam
true

```
# If Else Conditionals & Switches in JavaScript

We express a condition for if statements using relational operators. The relational operators allow us to compare two values to see whether they are equal, unequal, greater than, or less.


| **Conditions** | **Meaning**                             |
|----------------|-----------------------------------------|
| a == b         | a is equal to b                         |
| a != b         | a is not equal to b                     |
| a < b          | a is less than b                        |
| a> b           | a is greater than b                     |
| a <= b         | a is less than or equal to b            |
| a >= b         | a is greater than or equal to b         |
| a===b          | a has the same value and same type as b |


## if condition:-
The if statement is one of the most popular statement that is used by the programmers. We use if statement when we want to execute a statement in-case the certain condition is satisfied. 

**Syntax**
```js
if(condition expression)
{
// code to be executed
}
```
**Example: if condition**
```js
if( 5 > 0){
console.log("5 is greater than 0");
}
if( 5 < 0){
console.log("5 is less than 0");
}
```
The first if statement contains 5 > 0 as a conditional expression. The conditional expression 5 > 0 will be evaluated to be true, so the message "5 is greater than 0" will be displayed on the console, whereas the conditional expression in second if statement will be evaluated to be false, so the message "5 is less than 0" will not be displayed.


## else condition:-
When the 'if condition' evaluates to false, we use the else statement. The else statement must follow if or else if statement. Multiple else statements at the same time are not allowed.

**Syntax**
```js
if(condition expression){
//Execute this code. 
}
else{
//Execute this code.
}
```
**Example: else condition**
```js
let salary = 500;
if( salary > 1000)
{
console.log("My Salary is greater than 1000");
}else{
console.log("My Salary is less than or equal to 1000");
}
```
**Output:-** 

My Salary is less than or equal to 1000

The first if statement contains salary > 1000 as a conditional expression. The conditional expression salary > 1000 will be evaluated to be true, so the message "My salary is greater than 1000" will be displayed on the console, whereas if the conditional expression evaluated to be false, so the message "My salary is less than or equal to 1000" will be displayed.

## else if condition
We use "else if" condition when we want to apply second level conditions after the if statement. Following is the syntax of else if condition.

**Syntax:-**

```js
if(condition expression)
{
//Execute this code block
}
else if(condition expression){ 
//Execute this code block
}
```
**Example: else if condition**

```js
var salary = 500;
if( salary > 1000)
{
console.log("My Salary is greater than 1000");
}
else if(salary < 1000){
console.log("My Salary is less than 1000");
} else{
console.log("My Salary equal to 1000");
}
```

The first if statement contains salary > 1000 as a conditional expression. The conditional expression salary > 1000 will be evaluated to be true, so the message "My salary is greater than 1000" will be displayed on the console, whereas if Salary <1000 expression will be evaluated to be true, so the message "My salary is less than 1000" will be displayed. And if both conditions are evaluated to be false, then the last else block's statements will execute.

## JavaScript if else shortcut: ternary operator:-
JavaScript provides a ternary operator that can be used as a shorthand of the if-else statement. Following is the syntax of the ternary operator.
```js
Condition? expression1: expression2
```
If the condition evaluates to be true, the operator returns the value of the expression1. And if the condition evaluates to be false, it returns the value of the expression2.

**Example:-**

```js
5>0? "Greater" : "Smaller";
```
If the expression 5 > 0 is evaluated to true, the message "Greater" will display. And if the condition is evaluated to false, the message "Smaller" will display.

## The JavaScript Switch Statement:-
The switch statement is used to evaluate the expression. The switch statement is a part of JavaScript conditional statements. It is also used to control the flow of program execution. The switch performs different actions based on different conditions. The switch statement is often used with a break or a default keyword.

**Syntax:-**

```js
switch(expression) {
case a:
  // code block
 break;
case b:
 // code block
 break;
default:
 // code block
}
```
The expression in the switch statement is evaluated once. The value of the expression is compared with the values of each case. If the expression has a match, the associated block of code is executed, and if there is no match, the default code block is executed.

## The break Keyword:-
The break keyword in JavaScript is used to breaks out of the switch block. This keyword will stop the execution of the block. It is not necessary to break every case in a switch block.

**Note:** If we do not use the break statement, the next case will be executed even if the evaluation does not match the case.

## Experiment ( ifElse and CaseSwitch )
```js
console.log('level2_Day6');
const age = 128;
const doesDrive = false;
const variable = 34;




//Simple if Else
if (age!=19){
    console.log('Age is not 19')//Output:- Age is not 19
}

if(age !== 65){
    console.log('Age is not 65') //Output:- Age is not 65
}

else{
    console.log('Age is not 19')
}






//Defined or not Check
if (typeof variable !== 'undefined'){
    console.log('variable is defined');
} //output:- variable is defined
else{
    console.log('variable is not defined');
}





//or
if (doesDrive || age>18){ //&& -> and
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}


//ternary operators
console.log(age==45? 'Age is 45': 'Age is not 45');//Age is not 45




//case switch
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}//output:- You are unknown age



```


# Operators 
<h2>JavaScript Assignment Operators</h2>
<p>Assignment operators assign values to JavaScript variables.</p>
<table class="ws-table-all notranslate">
<tr>
<th style="width:25%">Operator</th>
<th>Example</th>
<th>Same As</th>
</tr>
<tr>
<td>=</td>
<td>x = y</td>
<td>x = y</td>
</tr>
<tr>
<td>+=</td>
<td>x += y</td>
<td>x = x + y</td>
</tr>
<tr>
<td>-=</td>
<td>x -= y</td>
<td>x = x - y</td>
</tr>
<tr>
<td>*=</td>
<td>x *= y</td>
<td>x = x * y</td>
</tr>
<tr>
<td>/=</td>
<td>x /= y</td>
<td>x = x / y</td>
</tr>
  <tr>
<td>%=</td>
<td>x %= y</td>
<td>x = x % y</td>
  </tr>
<tr>
<td>**=</td>
<td>x **= y</td>
<td>x = x ** y</td>
</tr>
</table>
The addition assignment operator (+=) adds a value to a variable.

<h2>JavaScript Comparison Operators</h2>

<table class="ws-table-all notranslate">
<tr>
<th style="width:12%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>==</td>
<td>equal to</td>
</tr>
<tr>
<td>===</td>
<td>equal value and equal type</td>
</tr>
<tr>
<td>!=</td>
<td>not equal</td>
</tr>
<tr>
<td>!==</td>
<td>not equal value or not equal type</td>
</tr>
<tr>
<td>&gt;</td>
<td>greater than</td>
</tr>
<tr>
<td>&lt;</td>
<td>less than</td>
</tr>
<tr>
<td>&gt;=</td>
<td>greater than or equal to</td>
</tr>
<tr>
<td>&lt;=</td>
<td>less than or equal to</td>
</tr>
<tr>
<td>?</td>
<td>ternary operator</td>
</tr>
</table>

<h2>JavaScript Logical Operators</h2>

<table class="ws-table-all notranslate">
<tr>
<th style="width:12%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>logical and</td>
</tr>
<tr>
<td>||</td>
<td>logical or</td>
</tr>
<tr>
<td>!</td>
<td>logical not</td>
</tr>
</table>

<h2>JavaScript Type Operators</h2>

<table class="ws-table-all notranslate">
<tr>
<th style="width:30%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>typeof</td>
<td>Returns the type of a variable</td>
</tr>
<tr>
<td>instanceof</td>
<td>Returns true if an object is an instance of an object type</td>
</tr>
</table>

<h2>JavaScript Bitwise Operators</h2>
<p>Bit operators work on 32 bits numbers.</p>
Any numeric operand in the operation is converted into a 32 bit number.
The result is converted back to a JavaScript number.

<div class="w3-responsive">
<table class="ws-table-all notranslate">
<tr>
<th style="width:12%">Operator</th>
<th style="width:25%">Description</th>
<th>Example</th>
<th>Same as</th>
<th>Result</th>
<th style="width:15%">Decimal</th>
</tr>
<tr>
<td>&amp;</td>
<td>AND</td>
<td>5 &amp; 1</td>
<td>0101 &amp; 0001</td>
<td>0001</td>
<td>&nbsp;1</td>
</tr>
<tr>
<td>|</td>
<td>OR</td>
<td>5 | 1</td>
<td>0101 | 0001</td>
<td>0101</td>
<td>&nbsp;5</td>
</tr>
<tr>
<td>~</td>
<td>NOT</td>
<td>~ 5</td>
<td>&nbsp;~0101</td>
<td>1010</td>
<td>&nbsp;10</td>
</tr>
<tr>
<td>^</td>
<td>XOR</td>
<td>5 ^ 1</td>
<td>0101 ^ 0001</td>
<td>0100</td>
<td>&nbsp;4</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>left shift</td>
<td>5 &lt;&lt; 1</td>
<td>0101 &lt;&lt; 1</td>
<td>1010</td>
<td>&nbsp;10</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>right shift</td>
<td>5 &gt;&gt; 1</td>
<td>0101 &gt;&gt; 1</td>
<td>0010</td>
<td>&nbsp; 2</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>unsigned right shift</td>
<td>5 &gt;&gt;&gt; 1</td>
<td>0101 &gt;&gt;&gt; 1</td>
<td>0010</td>
<td>&nbsp; 2</td>
</tr>
</table>

<h2>JavaScript Arithmetic Operators</h2>
<p>Arithmetic operators perform arithmetic on numbers (literals or variables).</p>

<table class="ws-table-all notranslate">
<tr>
<th style="width:25%">Operator</th>
<th>Description</th>
</tr>
<tr>
<td>+</td>
<td>Addition</td>
</tr>
<tr>
<td>-</td>
<td>Subtraction</td>
</tr>
<tr>
<td>*</td>
<td>Multiplication</td>
</tr>
<tr>
<td>**</td>
<td>Exponentiation (<a href="js_2016.asp">ES2016</a>)</td>
</tr>
<tr>
<td>/</td>
<td>Division</td>
</tr>
<tr>
<td>%</td>
<td>Modulus (Remainder)</td>
</tr>
<tr>
<td>++</td>
<td>Increment</td>
</tr>
<tr>
<td>--</td>
<td>Decrement</td>
</tr>
</table>

<h2>JavaScript Assignment Operators</h2>
<p>Assignment operators assign values to JavaScript variables.</p>

<table class="ws-table-all notranslate">
<tr>
<th style="width:25%">Operator</th>
<th>Example</th>
<th>Same As</th>
</tr>
<tr>
<td>=</td>
<td>x = y</td>
<td>x = y</td>
</tr>
<tr>
<td>+=</td>
<td>x += y</td>
<td>x = x + y</td>
</tr>
<tr>
<td>-=</td>
<td>x -= y</td>
<td>x = x - y</td>
</tr>
<tr>
<td>*=</td>
<td>x *= y</td>
<td>x = x * y</td>
</tr>
<tr>
<td>/=</td>
<td>x /= y</td>
<td>x = x / y</td>
</tr>
<tr>
<td>%=</td>
<td>x %= y</td>
<td>x = x % y</td>
</tr>
<tr>
<td>&lt;&lt;=</td>
<td>x &lt;&lt;= y</td>
<td>x = x &lt;&lt; y</td>
</tr>
<tr>
<td>&gt;&gt;=</td>
<td>x &gt;&gt;= y</td>
<td>x = x &gt;&gt; y</td>
</tr>
<tr>
<td>&gt;&gt;&gt;=</td>
<td>x &gt;&gt;&gt;= y</td>
<td>x = x &gt;&gt;&gt; y</td>
</tr>
<tr>
<td>&amp;=</td>
<td>x &amp;= y</td>
<td>x = x &amp; y</td>
</tr>
<tr>
<td>^=</td>
<td>x ^= y</td>
<td>x = x ^ y</td>
</tr>
<tr>
<td>|=</td>
<td>x |= y</td>
<td>x = x | y</td>
</tr>
<tr>
<td>**=</td>
<td>x **= y</td>
<td>x = x ** y</td>
</tr>
</table>


<h2>JavaScript Operator Precedence Values</h2>

<div class="w3-panel w3-warning">
<p>Pale red entries indicates ECMAScript 2015 (ES6) or higher.</p>
</div>

<table class="ws-table-all">
 <tr>
  <th style="width:10%">Value</th>
  <th style="width:15%">Operator</th>
  <th>Description</th>
  <th>Example</th>
 </tr>
 <tr>
  <td>21</td>
  <td>( )</td>
  <td>Expression grouping</td>
  <td>(3 + 4)</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>20</td>
  <td>.</td>
  <td>Member</td>
  <td>person.name</td>
 </tr>
 <tr>
  <td>20</td>
  <td>[]</td>
  <td>Member</td>
  <td>person[&quot;name&quot;]</td>
 </tr>
 <tr>
  <td>20</td>
  <td>()</td>
  <td>Function call</td>
  <td>myFunction()</td>
 </tr>
 <tr>
  <td>20</td>
  <td>new</td>
  <td>Create</td>
  <td>new Date()</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>18</td>
  <td>++</td>
  <td>Postfix Increment</td>
  <td>i++</td>
 </tr>
 <tr>
  <td>18</td>
  <td>--</td>
  <td>Postfix Decrement</td>
  <td>i--</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>17</td>
  <td>++</td>
  <td>Prefix Increment</td>
  <td>++i</td>
 </tr>
 <tr>
  <td>17</td>
  <td>--</td>
  <td>Prefix Decrement</td>
  <td>--i</td>
 </tr>
 <tr>
  <td>17</td>
  <td>!</td>
  <td>Logical not</td>
  <td>!(x==y)</td>
 </tr>
 <tr>
  <td>17</td>
  <td>typeof</td>
  <td>Type</td>
  <td>typeof x</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr class="w3-pale-red">
  <td>16</td>
  <td>**</td>
  <td>Exponentiation (ES2016)</td>
  <td>10 ** 2</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>15</td>
  <td>*</td>
  <td>Multiplication</td>
  <td>10 * 5</td>
 </tr>
 <tr>
  <td>15</td>
  <td>/</td>
  <td>Division</td>
  <td>10 / 5</td>
 </tr>
 <tr>
  <td>15</td>
  <td>%</td>
  <td>Division Remainder</td>
  <td>10 % 5</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>14</td>
  <td>+</td>
  <td>Addition</td>
  <td>10 + 5</td>
 </tr>
 <tr>
  <td>14</td>
  <td>-</td>
  <td>Subtraction</td>
  <td>10 - 5</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>13</td>
  <td>&lt;&lt;</td>
  <td>Shift left</td>
  <td>x &lt;&lt; 2</td>
 </tr>
 <tr>
  <td>13</td>
  <td>&gt;&gt;</td>
  <td>Shift right</td>
  <td>x &gt;&gt; 2</td>
 </tr>
 <tr>
  <td>13</td>
  <td>&gt;&gt;&gt;</td>
  <td>Shift right (unsigned)</td>
  <td>x &gt;&gt;&gt; 2</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>12</td>
  <td>&lt;</td>
  <td>Less than</td>
  <td>x &lt; y&nbsp;</td>
 </tr>
 <tr>
  <td>12</td>
  <td>&lt;=</td>
  <td>Less than or equal</td>
  <td>x &lt;= y</td>
 </tr>
 <tr>
  <td>12</td>
  <td>&gt;</td>
  <td>Greater than</td>
  <td>x &gt; y</td>
 </tr>
 <tr>
  <td>12</td>
  <td>&gt;=</td>
  <td>Greater than or equal</td>
  <td>x &gt;= y</td>
 </tr>
 <tr class="w3-pale-red">
  <td>12</td>
  <td>in</td>
  <td>Property in Object</td>
  <td>"PI" in Math</td>
 </tr>
 <tr class="w3-pale-red">
  <td>12</td>
  <td>instanceof</td>
  <td>Instance of Object</td>
  <td>instanceof Array</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>11</td>
  <td>==</td>
  <td>Equal</td>
  <td>x == y</td>
 </tr>
 <tr>
  <td>11</td>
  <td>===</td>
  <td>Strict equal</td>
  <td>x === y</td>
 </tr>
 <tr>
  <td>11</td>
  <td>!=</td>
  <td>Unequal</td>
  <td>x != y</td>
 </tr>
 <tr>
  <td>11</td>
  <td>!==</td>
  <td>Strict unequal</td>
  <td>x !== y</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>10</td>
  <td>&amp;</td>
  <td>Bitwise AND</td>
  <td>x &amp; y</td>
 </tr>
 <tr>
  <td>9</td>
  <td>^</td>
  <td>Bitwise XOR</td>
  <td>x ^ y</td>
 </tr>
 <tr>
  <td>8</td>
  <td>|</td>
  <td>Bitwise OR</td>
  <td>x | y</td>
 </tr>
 <tr>
  <td>7</td>
  <td>&amp;&amp;</td>
  <td>Logical AND</td>
  <td>x &amp;&amp; y</td>
 </tr>
 <tr>
  <td>6</td>
  <td>||</td>
  <td>Logical OR</td>
  <td>x || y</td>
 </tr>
 <tr>
  <td>5</td>
  <td>??</td>
  <td>Nullish Coalescing</td>
  <td>x ?? y</td>
 </tr>
 <tr>
  <td>4</td>
  <td>? :</td>
  <td>Condition</td>
  <td>? "Yes" : "No"</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr>
  <td>3</td>
  <td>+=</td>
  <td>Assignment</td>
  <td>x += y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>/=</td>
  <td>Assignment</td>
  <td>x /= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>-=</td>
  <td>Assignment</td>
  <td>x -= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>*=</td>
  <td>Assignment</td>
  <td>x *= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>%=</td>
  <td>Assignment</td>
  <td>x %= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>&lt;&lt;=</td>
  <td>Assignment</td>
  <td>x &lt;&lt;= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>&gt;&gt;=</td>
  <td>Assignment</td>
  <td>x &gt;&gt;= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>&gt;&gt;&gt;=</td>
  <td>Assignment</td>
  <td>x &gt;&gt;&gt;= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>&amp;=</td>
  <td>Assignment</td>
  <td>x &amp;= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>^=</td>
  <td>Assignment</td>
  <td>x ^= y</td>
 </tr>
 <tr>
  <td>3</td>
  <td>|=</td>
  <td>Assignment</td>
  <td>x |= y</td>
 </tr>
 <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
 </tr>
 <tr class="w3-pale-red">
  <td>2</td>
  <td>yield</td>
  <td>Pause Function</td>
  <td>yield x</td>
 </tr>
 <tr>
  <td>1</td>
  <td>,</td>
  <td>Comma</td>
  <td>5 , 6</td>
 </tr>
</table>