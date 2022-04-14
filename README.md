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
### Level 1 (Newbie)
  * [**Basic info:**](#basic-info) 
  * [**Display an alert box:**](#display-an-alert-box)
  * [**Console log()**](#console-log)
  * [**Simple Calculation**](#simple-calculation) 
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
    

***********
### Level 2 
 
  




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


## Console log()
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

### Console.log() (all):-

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

Output:-













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




# Level 2 

<p align="center">
        <img src="https://c.tenor.com/xatLP2moOZIAAAAC/perq-ai-leasing-assistant.gif"/>
        </p>

