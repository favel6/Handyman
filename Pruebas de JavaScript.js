<script>
<p id="demo">innerHTML</p>
document.getElementById("demo").innerHTML = x + y;
document.getElementById("demo").innerHTML = "Hello Dolly.";
document.write("Variable, numero o texto");
document.write(Date());
function myFunction() {document.write(Date());}
console.log(c);
console.log("catiando, catiando ...");

// Variables

var length = 16;                                      // Number assigned by a number literal
var lastName = "Johnson";                             // String assigned by a string literal
var cars = ["Saab", "Volvo", "BMW"];                  // Array  assigned by an array literal
var person = {firstName:John, lastName:Doe};          // Object assigned by an object literal 
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
var cars = ["Saab","Volvo","BMW"]; document.getElementById("demo").innerHTML = cars[1]; 	// Variable type Arrays  0, 1, y 2
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; 					// Variable type Objects
var x = new String();          // Declares x as a String object
var y = new Number();          // Declares y as a Number object
var z = new Boolean();         // Declares z as a Boolean object

// Functions

function myFunction(a, b) {return a * b;}	// returns the product of a and b
typeof("john");                 // Returns "string"
typeof(3.14);                   // Returns "number"
typeof(false);                  // Returns "boolean"
typeof({name:'john', age:34});  // Returns "object"
function functionName(parameters) {code to be executed } // generico
function myFunction(parameter1, parameter2) {code to be executed}
<button onclick='getElementById("demo").innerHTML=Date()'>The time is?</button>  	//changes the content of the element with id="demo".
<button onclick="this.innerHTML=Date()">The time is?</button> 						//changes the content of it's own element (using this.innerHTML): 


// Theory
document.getElementById() 	Find an element by element id
document.getElementsByTagName() 	Find elements by tag name
document.getElementsByClassName() 	Find elements by class name
<button onclick='getElementById("demo").innerHTML=Date()'>The time is?</button>  	//changes the content of the element with id="demo".
<button onclick="this.innerHTML=Date()">The time is?</button> 						//changes the content of it's own element (using this.innerHTML): 
function functionName(parameters) {code to be executed } // generico
function myFunction(parameter1, parameter2) {code to be executed}
element.innerHTML= 	Change the inner HTML of an element
element.attribute= 	Change the attribute of an HTML element
element.setAttribute(attribute,value) 	Change the attribute of an HTML element
element.style.property= 	Change the style of an HTML element
document.createElement() 	Create an HTML element
document.removeChild() 	Remove an HTML element
document.appendChild() 	Add an HTML element
document.replaceChild() 	Replace an HTML element
document.write(text) 	Write into the HTML output stream
document.getElementById(id).onclick=function(){code} 	Adding event handler code to an onclick event
document.anchors 	Returns all <a> with a value in the name attribute 	1
document.applets 	Returns all <applet> elements (Deprecated in HTML5) 	1
document.baseURI 	Returns the absolute base URI of the document 	3
document.body 	Returns the <body> element 	1
document.cookie 	Returns the document's cookie 	1
document.doctype 	Returns the document's doctype 	3
document.documentElement 	Returns the <html> element 	3
document.documentMode 	Returns the mode used by the browser 	3
document.documentURI 	Returns the URI of the document 	3
document.domain 	Returns the domain name of the document server 	1
document.domConfig 	Returns the DOM configuration 	3
document.embeds 	Returns all <embed> elements 	3
document.forms 	Returns all <form> elements 	1
document.head 	Returns the <head> element 	3
document.images 	Returns all <image> elements 	1
document.implementation 	Returns the DOM implementation 	3
document.inputEncoding 	Returns the document's encoding (character set) 	3
document.lastModified 	Returns the date and time the document was updated 	3
document.links 	Returns all <area> and <a> elements value in href 	1
document.readyState 	Returns the (loading) status of the document 	3
document.referrer 	Returns the URI of the referrer (the linking document) 	1
document.scripts 	Returns all <script> elements 	3
document.strictErrorChecking 	Returns if error checking is enforced 	3
document.title 	Returns the <title> element 	1
document.URL 	Returns the complete URL of the document 	1



</script>