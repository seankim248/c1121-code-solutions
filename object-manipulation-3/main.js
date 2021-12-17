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

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
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
    else if (cards[i].includes('K') || cards[i].includes('Q') || cards[i].includes('J')) total += 10;
    else total += parseInt(cards[i]);
  }
  return total;
}

function highestScore(scores) {
  var highest = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

var highestScoreIndex = playerScores.indexOf(highestScore(playerScores));

function tieBreaker(scores) {
  var tieIndices = [];
  for (var i = 0; i < scores.length; i++) {
    for (var j = 0; j < scores.length; j++) {
      if (i !== j) {
        if (scores[i] === scores[j]) {
          tieIndices.push(i);
        }
      }
    }
  }
  return tieIndices;
}

function logTieBreaker(arr) {
  var names = '';
  for (var m = 0; m < arr.length; m++) {
    if (m === arr.length - 1) {
      names += players[arr[m]].name;
    } else {
      names += players[arr[m]].name + ' and ';
    }
  }
  return names + ' tied!';
}

if (tieBreaker(playerScores).length === 0) {
  console.log(players[highestScoreIndex].name);
} else {
  console.log(logTieBreaker(tieBreaker(playerScores)));
}
