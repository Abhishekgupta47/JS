// console.log('hello world');

// --------DATE OBJECT------------

// let currDate = new Date();
// console.log(currDate);

// var d = new Date (2023,0,5,10,33,30,0);
// console.log(d.toLocaleString());

// var d = new Date(1609574531435);
// console.log(d.toLocaleString());

// const curDate = new Date();
// how tto vet the endivisual date

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());




// ---------TimeMethod-----------

// how to get the indivisual current time 


// const curTime = new Date();

// console.log(curTime.getTime());
// // the getTime() method returns the number of miliseconds since jan 1 ,1970
// console.log(curTime.getHours());
// //  the getHours() methods returns the hours of a date as a number(0-9)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// ------how to set the indivisual Time

let curTime = new Date();

// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));




//  ****------MATH-OBJECT------****

// the java script math object allows you to perform mathematical tasks on numbers

// console.log(Math.PI)
// console.log(Math.PI);

//  Math.round()
// returns the value of x rounded to its nearest integer

let num = 10.2565;

// console.log(Math.round(num));

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,32));

// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-8));

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.4));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// Math.floor()
// Math.floor(x)returns the value of x rounded down to its nearest integer
// console.log(Math.floor(4.7));
// console.log(Math.floor(99.9));

// Math.min()
// Math.min() can be used to find the lowest value in a list of program

// console.log(Math.min(0,150,30,20,-8,-200));

// Math.max()
// Math.max()can be used to find the highest value in a list of program

// console.log(Math.max(0,150,30,20,-8,-9))

// Math.random()
// Math.random() returns a random number between 0 (inclusive),and 1(inclusive)

// console.log(Math.floor(Math.random()*10));// 0 to 9

// Math.trunc()
// the trunc() method returns the integer part of a number
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));


//  ------*** DOM vs BOM  ***------ //

// DOM-> the dom is the document object model , which deals with the document , the html elements themselves, e.g document and all traversal you would do in it , events , etc .


// the BOM is the browser object model , which deals with browser components aside from the document , like history , location , navigator and screen ( as well as some other that vary by browser). or in simple meaning all the window operations which comes under BOM are performed using BOM


//  Lets see more practical on history object 
//  Function alert/confirm/prompt are a part of BOM:
// they are directly not related to the document ,
// but represent pure browser methods of communicating with the users

// alert(location.href);
// if(confirm("wants to visit thapaTechnical")){
//     location.href=
//     "https://www.youtube.com/thapatechnical";
// }
 




//  Navigation through the DOM



//  How to search the elements and the refrences 
//        we will see in the this file


// Section 11 *******EVENTS in JavaScript*******

// HTML events are "things" that happens to html elements.
//  whean JavaScript is used in HTML pages, JavaScript can "react" on these events.

// HTML Events 
// An HTML event can be something the browser does , or something a user does.
//  here are some examples of HTML events :


// An HTML web page has finished loading
// An HTML input field was changed 
// An HTML button was clicked 
// Often, whean events happen , you may want to do something.

//  JavaScript lets you execute code whean events are detected.
//  JavaScript allows event handler attributes , with JavaScript code to be added to html elements


//  ******* ways of writting events in JavaScript

//  1: using alert();
//  2:By Calling a function (we already seen and most common way of writting)
//  3: using Inline events (HTML onclick()=""property and element.onclick)
//  4: using event listeners (addEventListener and IE's attachEvent)

//  check the event html file



//  point 2 : what is event object?
// Event object is the parent object of the event object.
//  for example
// MouseEvent,focusEvent,KeyboardEvent etc
   
//  point 3: MouseEvent in JavaScript
// The MouseEvent Object 
// events that occur whean the mouse interacts with HTML document belongs to the MouseEvent Object  

//  point 4 keyboardEvent in JavaScript
// Events that occur whean user presses a key on the keyboard,
// belongd to the keyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp
