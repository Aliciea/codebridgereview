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

// //Task 11: Pirnt intergers mulitples of 5 as long as it's less than 100

let i = 1;
while(i < 100){
	console.log(i * 5); 
	i++;
} 

// //Task 13: Using a while loop print integers btwn 0 and 20. 
// All numbers divisible by 2 should be multiplied by 3 before they are output. 
// All other integers should not be output. 
// Need help with this problem...

let i = 1;
while(i < 20){
	if (i % 2 === 0) {
		console.log(i * 3);
	}
		i++;
}
// //Task 14: Using a while loop, print out all prime numbers between 0 - 20

let i = 0;
while(i < 21){
	console.log(i);
	i+=2;
}

// //Task 15: Nando went to the vending machine to buy himself a cookie. 
// The cookie costs $4 dollars. He paid with a $10 bill, 
// the vending machine paid him back in quarters. 
// Write a loop that says how many quarters he got in return.


let quarters = 0;
let value = 10.00 - 4.00;
while(value >= 0.25){
	quarters++;
	value-=0.25;
}
console.log(quarters);

// //Task 24
es5 
function addition(a, b, c){
	var z
	z =  a + b + c;
	return z;
}

es6
let division = (a, b, c) => (a + b + c) / 3;
console.log(division);

// vs task 25/26 of how es5 & es6 version should be written for task 24... 

// //task 32
function change(bills, cost = 2.00){
	let quarters = (bills - cost) / 0.25;
	return quarters;
}
 
//task 33 logical question
//need help with questions 33/34


//task 34 fizz buzz
for(var i = 1; i < 100; i++){	
	if(i % 3 == 0 && i % 5 == 0){
	  console.log("fizzbuzz");
	}else if(i % 3 == 0){ 
	  console.log("fizz");
	}else if(i % 5 == 0){
	  console.log("buzz");
	}else{
	  console.log(i);
	} 
}








