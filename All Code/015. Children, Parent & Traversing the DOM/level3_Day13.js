console.log('Welcome to Day 15');









/*1. querySelector or querySelectorAll:-
 To traverse downwards from a specific element, we can use querySelector( ) or querySelectorAll( ).
 The querySelector() returns the first element within the document that matches the specified selector
 whereas the querySelectorAll() returns the NodeList representing a list of the document's elements
 that match the specified group of selectors.*/

// let cont = document.querySelector('.no');
// console.log(cont);
//
// cont = document.querySelector('.container');
// console.log(cont);










/*2. We want to get our all child node now*/
// console.log(cont.childNodes);//it will show you everything include text and commends
// console.log(cont.children); // it will give us only children element and ignore text , commends inside cont or new line and so on








/*3.It will show you exact node name of the index position which you entered*/
// let nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);










/*4.it will show you the entered index position's elements type in the array */

/*Constant	                  Value	       Description
Node.ELEMENT_NODE	            1	       An Element node like < h1 > or < p >. < / td >
Node.ATTRIBUTE_NODE	            2          An Attribute of an Element.
Node.TEXT_NODE	                3	       The actual Text inside an Element
Node.COMMENT_NODE	            8	       A Comment node
Node.DOCUMENT_NODE	            9          A Document node.
Node.DOCUMENT_TYPE_NODE	       10          A DocumentType( < ! DOCTYPE html > ) node
Node.DOCUMENT_FRAGMENT_NODE	   11	       A DocumentFragment node.


Node types
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType*/










/*5.find children in the document */
// let container = document.querySelector('div.container');
// console.log(container.children);
// console.log(container.children[1].children[0].children);








/*6.element*/
let container = document.querySelector('div.container');
// console.log(container.firstChild); //first child
// console.log(container.firstElementChild); //first child's element
// console.log(container.lastChild);
// console.log(container.lastElementChild);//last child
// console.log(container.childElementCount); //child element's count
console.log(container.firstElementChild);//first element child
console.log(container.firstElementChild.parentNode);//parent is the container
console.log(container.firstElementChild.nextSibling);//it will give you sibling
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);










