
//place a message in a particular paragraph
function main(){

// var is used to create a local variable 
// let is used to restrict a variable further to a blook or expression
// using no keywords when creating a variable, makes it global
// misspelled valiable names are a source of bugs
// because javascript just creates a new global variable with that name node


var message = document.getElementById("message");
message.innerHTML = "Hi low, Wiold";
message.style.backgroundColor = ("yellow");


// javascript data types:
// numeric (basically, a double)
// strings (you can uses single or double quotes)
// boolian (will be true or false)
// objects 
// regualar expressions
// array 

// variables are case sensative, can use letters , digits, _ or $ 
// but cant start with a number 
// javascript uses type coercion by default

var a = 25; 
var b = "25";

var c = a+b;
var d = 200 / b;
var e = (a === b);
message.innerHTML = isNaN(b);

var response = prompt("wassupppppp??!!!")
message.innerHTML= "WassUPP with??!!" + response

var anwser = confirm("Aren't popups annoying?")
if (anwser == false){
    message.innerHTML = "no way. ";
}
}