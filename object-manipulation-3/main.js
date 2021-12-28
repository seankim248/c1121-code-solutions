console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var suits = ['♠', '♥', '♣', '♦'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
    deck.push(ranks[j] + suits[i]);
  }
}
var shuffledDeck = _.shuffle(deck);

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

function runCardGame(players) {
  for (var k = 0; k < players.length; k++) {
    players[k].hand.push(shuffledDeck[k], shuffledDeck[k + players.length]);
  }
  var playerScores = [];
  for (var l = 0; l < players.length; l++) {
    var score = handleScore(players[l].hand);
    playerScores.push(score);
  }
  var highestScoreIndex = playerScores.indexOf(highestScore(playerScores));

  if (tieBreaker(playerScores).length === 0) {
    console.log(playerScores);
    console.log(players[highestScoreIndex].name);
  } else {
    var remainingPlayers = [];
    var tiedIndices = tieBreaker(playerScores);
    for (var m = 0; m < tiedIndices.length; m++) {
      if (!remainingPlayers.includes(tiedIndices[m])) {
        remainingPlayers.push(players[tiedIndices[m]]);
      }
      remainingPlayers[m].hand = [];
    }
    console.log(playerScores);
    runCardGame(remainingPlayers);
  }
}

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

runCardGame(players);
