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