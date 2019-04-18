//create a grade calculator with an if else statement and a switch statement

//if else statement

// var gradeCalulator = grade;

// if(gradeCalulator >= 90) {
// 	console.log('A');
// }else if(gradeCalulator >= 80) {
// 	console.log('B');
// }else if(gradeCalulator >= 70) {
// 	console.log('C');
// }else if(gradeCalulator >=55) {
// 	console.log('D');
// }else{
// 	console.log('F');
// } 

//switch statement

// var gradeCalulator = grade;

// swith(gradeCalulator) {
// 	case '90';
// 	console.log('A');
// 	break;
// 	case '80';
// 	console.log('B');
// 	break;
// 	case '70';
// 	console.log('C');
// 	break;
// 	case '55';
// 	console.log('D');
// 	break;
// 	case '50';
// 	console.log('F');
// 	break;
// }

//use an if else and switch statement to create a grade calulator

// var gradeCalulator = grade;

// switch = function gradeCalulator() {
// }

//use double array and function to compare grades

// let possibleGrades = [
// 	['A', 90],
// 	['B', 80],
// 	['C', 70],
// 	['D', 60],
// 	['F', 50],
// ]

// // PossibleGrades.A
// // PossibleGrades["A"]
// console.log(possibleGrades[0].length);

// function gradeCalculator(possibleGrades = [], grade) {
// 	for(let i = 0; i < possibleGrades.length; i++) {
// 		if(grade >= possibleGrades[i][1]) {
// 			return possibleGrades[i][0];
// 		}


// 	}
// 	return "F";


// }

// let arg = process.argv[2];
// console.log(arg);
// console.log(gradeCalculator(possibleGrades, arg));

let isPrime = "";
let isEven = "";

for( let i = 1; i < 21; i ++){
	if((i > 1 && i % 2 > 0 && i % 3 > 0) || (i === 2 || i === 3)) {
		isPrime = "isPrime";

	}else{
		isPrime = "";
	}
	if(i % 2 === 0){
		isEven = "isEven";
	}else{
		isEven = "isOdd";
	}
	console.log(`i = ${i} ${isPrime} ${isEven}`);
}


