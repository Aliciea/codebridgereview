Objects, Loops / Array @ CodeSmith

############################ loops: for loops and while loops #######################################
Loops (iteration statement) allows you to write a block of code once, and repeat the execution 
of the code for a given number of times.
for loop (accepts three conditions, insdie the parentheses and are seperated by semicolons)
initial expression: initialize any js experssion(is a bit of js code that evaluates to a single value)
declare a variable(i used as a counter for how many times the loop iterates)
conditional expression(js expression that will evalute to a true or false)
increment expression(it increments your loop, excuted after the code inside of the loop block is run)

print out all even numbers btw 1 and 50
write two solution using a while loop and for loop 

for(let i = 0; i < 51; i+=2) {
	console.log(i);
}

let i = 0;
while(i < 50) {
	i+=2;
	console.log(i);
}

// write a code to create an ASCll art triangle, use a for loop and nested loops

for(i = 0; i < 6; i++) {
	console.log("$");
	
}

Assignment Loop exercise 	

write a for loop that counts up from 0 to 50 in increments of 5
for(let i = 0; i < 51; i+=5) {
	console.log(i);
}

write a for loop that counts down from 10 to 1
for(let i = 10; i > 0; i--) {
	console.log(i);
}

write a loop that outputs mulitples (multiplication) of 3
starting at 6 and does not go over 60
let i = 1;
while(i < 20) {
	i++;
	console.log(i * 3);
}

Bonus: write a for loop that outputs `even` for all numbers divisble by 2  
and `odd`for all numbers divisible by 3
for(let i = 0; i < 46; i++) {
	if(i % 2 === 0 ){
		console.log(`even`);
	}else if(i % 3 === 0 ) {
		console.log(`odd`);
	}else{ 
	console.log(i);
	
	}
}

codesmith loops/arrays
using a for loop, decrement countDown by one each time the loop runs until it equals 0
let countDown = 10;
for(let i = 10; i > 0; i--) {
	countDown = i;
	console.log(countDown);
}

// ############################ arrays #######################################################

// reexamin arrays (a way to store a list of values)
// arrays are donated by: let starseeds = ["auset", "aluna", "fleurbrun"];
// js uses a zero-based indexing system to keep track of array element... 
// ex: the index of 'auset' is 0
// the index of 'aluna' is 1
// console.log(starseeds[0]) to grab the element index from the array
// length property tells us how many items are in the array
// push method: add an element to the end of an array
// ex: starseeds.push(arcturian);
// console.log(starseeds); //should log: ["auset", "aluna", "fleurbrun", "arcturian"];
// pop method: to remove items for the end of an array
// ex: starseeds.pop();
// ex: console.log(starseeds); // should log: ["auset", "aluna", "fleurbrun"];

// create a variable called fourthItem and assign it the value of the fourth item
// in the horror array('Ghostface')
// then console.log fourthItem to see the output

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky']; 
let fourthItem = ('Ghostface');
console.log(fourthItem);

// use a built-in JS method to add another show to the netflixShows array. 
// then log your updated array to the console. 
// const netflixShows = ["orange is the new black", "black mirror", "chewing gum"];
// netflixShows.push("schits creek");
// console.log(netflixShows);

// ########################## looping through arrays #######################################
// Value(can be access using the indes of its position in the array) ex: myArray[o]
// i(to access each successive element in an array as the loop runs)

const myArray = ['string1', 'string2', 'string3']; //declare variable myArray
//and assign it a value of an array containing a few strings
for(let i = 0; i < myArray.length; i++) { //declare a for loop that run as long as i is less
//than the length of the array
//note: both the array's indexes and i start at 0 and increment by 1, we can effectively us i
//to lookup the elements in the array in order, where i will correspond to an index in the array
	console.log(myArray[i]); //reference the current element of an array myArray[i]
}

// iterate through the synonyms array using a for loop
// pushing a greeting string with the format "have a [synonym] day!" into the greetings array
// use a second for loop to iterate through the greetings and console.log() each greetings. 

// const synonym = ['awesome', 'chilled', 'gnarly'];
// //iterate the synonyms array using a for loop into the greetings array 
// const greetings = [];
// for(let i = 0; i < synonym.length; i++) {
// //push a greeting string witht the format "have a [] day!"	
// 	greetings.push(`have a [i] day!`);
// //console.log() each greetings	
// 	console.log(synonym);
// //use a second for loop to iterate through the greetings
// } 
// for(let j = 0; j < greetings.length; i++){
// 	console.log(greetings);
// }


const synonym = ['awesome', 'chilled', 'gnarly'];
const greetings = [];
for(let i = 0; i < synonym.length; i++) {
	greetings.push(`have a ${synonym[i]} day!`);
	// console.log(synonym);
}
for(let j = 0; j < greetings.length; i++){
	console.log(greetings);
}

var contacts ['matt smith', 'sam davis', 'ashley jones'];
let dad = "sam davis";
contacts[0]


















