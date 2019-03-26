/* understanding how module and strings work...control flow...
console.log(4);
console.log(10 % 3);

console.log(100 % 3);

console.log("blah " + "blah");
console.log("hello".length);
var friend = "Sally";
console.log(friend);
console.log("hello there " + friend);
friend = "no one";
console.log("hello there " + friend);

var num = "43";
console.log("43");

prompt("what is your user name");
"colt"; */

//unit 1.4 WhileLoops/Functions

//task 8: Print intergers multiples of 3 as long as integers are less than 35

let i = 1;
while(i < 35){
	console.log(i * 3); 
	i++;
} 

//Task 11: Pirnt intergers mulitples of 5 as long as it's less than 100

let i = 1;
while(i < 100){
	console.log(i * 5); 
	i++;
} 

//Task 13: Using a while loop print integers btwn 0 and 20. 
All numbers divisible by 2 should be multiplied by 3 before they are output. 
All other integers should not be output. 
Need help with this problem...
let i = 20;
while(i % 2 === 0 && i * 3){
	console.log(i);
	i++;
}

//Task 14: Using a while loop, print out all prime numbers between 0 - 20

let i = 0;
while(i < 20){
	console.log(i);
	i+=2;
}

//Task 15: Nando went to the vending machine to buy himself a cookie. 
The cookie costs $4 dollars. He paid with a $10 bill, 
the vending machine paid him back in quarters. 
Write a loop that says how many quarters he got in return.

let i = 4;
while(i < 10){ 
if(i % 24 === 0){
	console.log(i);
	i--;
}

//Task 24
es5 
function addition(a, b, c){
	var z
	z =  a + b + c;
	return z;
}
es6
let division = (a, b, c) => a / b / c;
console.log(division(3, 6, 9 / 3));
vs task 25/26 of how es5 & es6 version should be written for task 24... 

//task 32
function let(){
	let (x,y);
	console.log(1 + 1 / 20);
}
 
//task 33 logical question
//need help with questions 33/34

//task 34 fizz buzz








