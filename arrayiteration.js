//forLoop
//loop over an array using a for loop,
//we need to make use of the array's length property

var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}
//##################################################################

//forEach is a method
//.forEach takes a callback function, 
//that callback function is expected to have at least 1, 
//but up to 3, arguments. 

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

js provides an easy built-in way to iterating over an array
arr.forEach(someFunction)

var colors = ["red", "orange", "green"];

colors.forEach(function(color) {
//color is a placeholder, call it whatever you want
console.log(color);	
});

//define a function and past another function in the forEach

var colors = ["red", "orange", "yellow", "green"];
//name the function inside the forEach function anything you want i.e. iLoveDogs
colors.forEach(function(iLoveDogs) {
	console.log("INSIDE THE FOREACH" + iLoveDogs);
});

//exercise 
//this is a tricky exercise that is meant confused you 

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) { //
//we are running the numbers.forEach in the function
	if(color% 3 === 0) {
		console.log(color);
	}
});

//rewrite above code and translate it into a forLoop

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];
for(i = 0; i < numbers.length; i++){
	if(numbers% 3 === 0){
		console.log(numbers);
	}
}




var baseballTeams = ['dodgers', 'giants', 'mets', 'yankees', 'astros'];
baseballTeams


