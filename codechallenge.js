//coding challenge
//question 1

// for(i = 0; i < 21; i++){
// 	if(i % 2 === 0){
// 		console.log(i * 3);
// 	}else if(i % 2 > 0){
// 		console.log(i + 3);
// 	}else{
// 		console.log(i);
// 	}
// }

//question 2

for(i = 0; i < 21; i++){
	if(i > 1){ 
		if(i === 3 || i === 2){
			console.log(i + " is prime ");
		} else if(i % 2 === 0 || i % 3 === 0){
			console.log(i + " is not prime ");
		}else{
			console.log(i + " is prime ");
		}
	}else{
		console.log(i + " is not prime");
	}
}

// console.log(9 % 3);

//question 3

for(i = 1; i < 51; i++){
	if(i % 10 === 0){
		console.log(i + " i am the 10th iteration");
	}
	else if(i % 5 === 0){
	console.log(i + " i am the 5th iteration");
	}else{
		console.log(i);
	}
}

for(i = 0; i < 11; i++){
	// console.log(i);
	if(i % 2 === 0){
			console.log(i + " prime");
		} else if(i % 3 === 0){
			console.log(i + " odd");
		}else{
			console.log(i + " even");
		}
	}
