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
  * [JS in HTML :](#js-in-html)
  




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

## JS in HTML 

### Ok ! Can you tell me where we use our JS in the HTML ? 

#### look at the HTML code above and just try to find out from the js file 


Ok lemme tell you....hmm...

Between  script tag like this and always try to set this between body tag 

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/17.png?raw=true"/>
        </p>


### write HTML to the document

document. write() is used to write HTML to the document using Javascript. console. log() is used to log or display something to the Javascript console.

<p align="center">
        <img src="https://github.com/Subham-Maity/javascript-tutorial-/blob/master/Image(ignore)/18.png?raw=true"/>
        </p>

```javascript
document.write("this is document write")
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
console.warn("this is document write")
```
