//Week 1 Day 1 exercise 
//understanding for loops, interpolation and arrays
// for (let i = 0; i <= 16; i+=4) {
//  	console.log(i);
//  } 

// for (let i = 0; i <= 50; i+=5) {
// 	console.log(i);
// }

// for (let i = 20; i >= 1; i--) {
// 	console.log(i);
// }
// every for loop has 3 parts, where it starts, where it ends and how it iterates
// for (let i = 2; i <= 10; i= i + 2) {
// 	console.log(i);
// }
// whatever the value of i is subtract 11 from it
// for (let i = 44; i >= 11; i-=11) {
// 	console.log(i);
// }

// for (let i = 0; i <= 170; i+=17) {
// 	console.log(i);
// }

// for (let i = 0; i < 10; i++) {
// 	console.log(i * 10);

// }
// //string interpolation anything with a ``, $ and {inside this bracket}
// for (let age = 2; age <= 6; age++) {
// 	console.log(`joovay is ${age * 10} yrs old`);
// }

// for (let i = 1; i <= 5; i++) {
// 	console.log(`nero is ${i * 5} yrs old`);
// }

// for (let i = 2; i <= 20; i++) {
// 	if(i % 2 === 0) {
// 		console.log("this number is even");
// 	} else {
// 		console.log("this number is not even");
// 	}
// }

// for ( let i = 1; i <= 20; i++) {
// 	if(i >= 10) {
// 		console.log(`${i} is greater than 10`);
// 	} else {
// 		console.log(`${i} is not greater than 10`);
// 	}
// }
// //pracetice (ask Kai about arrays)
// // var myNumber = 8;
// // myNumber += 3;
// // myNumber -= 5;
// // console.log(myNumber);

// //GA Fundamentals Unit 8, Array exercise 

// // var contacts ["Matt Smith", "Sam Davis", "Ashley Jones"];

// // var dad = "Sam Davis";

// // contacts[0] = "Mark Williams";
// // contacts.pop("Ashley Jones");
// // contacts.push("Michele Johnson");

// // var numberOfContacts = 'contacts.length[3]';

// //codesmith arrays
// //arrays examing elements
// //note: we'er using const because the vaule horror does not change
// const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
// //create a variable called fourthItem and assign it the value of the fourth item in the horror array
// //then console.log fourthItem to see the output.
// let fourthItem = ('Ghostface');
// console.log(fourthItem);

// //arrays adding elements
// const netflixshows = ["orange is the New Black", "Black Mirror", "chewing Gum"];
// //add another show to the netflix array
// netflixshows = ("pizza");
// console.log(netflixshows);

// //for loops - fundamentals 
// let countDown = 10;
// //create a for loop that starts at 10 and ends at zero 
// for (let i = 10; i >=0; i--);
// countDown = i;
// console.log(countDown);

// //for loops and arrays
// const synonyms = ['fantastic','wonderful', 'great'];
// //using a for loop, push a greeting string with the format Have [synonyms] day
// for (let i = 0; i < synonyms.[day])

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck(arr, arr1) {
  for (let i = 0; i < arr.length; i++){
    for (let k = 0; k < arr1.length; k++){
      let card = {
        value: arr[i],
        suit: arr1[k]
      };
      deck.push(card);
    }
  }
  return deck;
};

function dealCardsToPlayers() {
  player1Card = deck.splice([Math.floor(Math.random() * 53)], 1);
  // console.log(player1Card);
  // console.log(`hello`);
  player2Card = deck.splice([Math.floor(Math.random() * 53)], 1);
  // console.log(`hello`);
  // console.log(player2Card);
  return [player1Card, player2Card];
};

function announceCards() {
  console.log('Player one is showing the:');
  console.log(player1Card[0]);
  console.log('Player two is showing the:');
  console.log(player2Card[0]);
};

function cardToRank(card) {
  switch(card) {
    case 2 :
      return 2;
      break;
    case 3 :
      return 3;
      break;
    case 4 :
      return 4;
      break;
    case 5 :
      return 5;
      break;
    case 6 :
      return 6;
      break;
    case 7 :
      return 7;
      break;
    case 8 :
      return 8;
      break;
    case 9 :
      return 9;
      break;
    case 10:
      return 10;
      break;
    case 'Jack':
      return 11;
      break;
    case 'Queen':
      return 12;
      break;
    case 'King':
      return 13;
      break;
    case 'Ace':
      return 14;
      break;
  };
};

function announceWinner() {
  if (cardToRank(player1Card[0].value) > cardToRank(player2Card[0].value)){
    console.log('Player One Wins!')
  }
  else if(cardToRank(player2Card[0].value) > cardToRank(player1Card[0].value)){
    console.log('Player Two Wins')
  }
  else{
    console.log('NO ONE WINS. PLAY AGAIN!')
  };
};

function returnCardsToDeck() {
  deck.push(player1Card);
  deck.push(player2Card);
  player1Card = null;
  player2Card = null;
};

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
};



buildDeck(values, suits);
playGame();
// console.log(player1Card)
// console.log(player1Card[0].value);
// console.log(cardToRank(player1Card[0].value));