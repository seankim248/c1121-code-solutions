console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var suits = ['♠', '♥', '♣', '♦'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var players = [
  {
    name: 'Sean Kim',
    hand: []
  },
  {
    name: 'Andrew Kim',
    hand: []
  },
  {
    name: 'Jay Park',
    hand: []
  },
  {
    name: 'Jacob Park',
    hand: []
  }
];

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 13; j++) {
    deck.push(ranks[j] + suits[i]);
  }
}

var shuffledDeck = _.shuffle(deck);

for (var k = 0; k < 4; k++) {
  players[k].hand.push(shuffledDeck[k], shuffledDeck[k + 4]);
}

var playerScores = [handleScore(players[0].hand), handleScore(players[1].hand), handleScore(players[2].hand), handleScore(players[3].hand)];

function handleScore(cards) {
  var total = 0;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].includes('A')) total += 11;
    else if (cards[i].includes('K') || cards[i].includes('Q') || cards[i].includes('J') || cards[i].includes('10')) total += 10;
    else if (cards[i].includes('9')) total += 9;
    else if (cards[i].includes('8')) total += 8;
    else if (cards[i].includes('7')) total += 7;
    else if (cards[i].includes('6')) total += 6;
    else if (cards[i].includes('5')) total += 5;
    else if (cards[i].includes('4')) total += 4;
    else if (cards[i].includes('3')) total += 3;
    else if (cards[i].includes('2')) total += 2;
  }
  return total;
}

function highestScore(scores) {
  for (var i = 0; i < scores.length; i++) {
    var highest = 0;
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

var highestScoreIndex = playerScores.indexOf(highestScore(playerScores));

console.log(players[highestScoreIndex].name);
