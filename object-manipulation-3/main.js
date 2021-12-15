console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var suits = ['♠', '♥', '♣', '♦'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
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
console.log([]);

for (var k = 0; k < players.length; k++) {
  for (var l = 0; l < shuffledDeck.length; l++) {
    players[k].hand.push(shuffledDeck[k], shuffledDeck[k + 1]);
  }
}
