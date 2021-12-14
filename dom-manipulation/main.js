var totalClicked = 1;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (e) {
  $clickCount.textContent = 'Clicks: ' + totalClicked++;
  if (totalClicked < 4) {
    e.target.className = 'hot-button cold';
  } else if (totalClicked < 7) {
    e.target.className = 'hot-button cool';
  } else if (totalClicked < 10) {
    e.target.className = 'hot-button tepid';
  } else if (totalClicked < 13) {
    e.target.className = 'hot-button warm';
  } else if (totalClicked < 16) {
    e.target.className = 'hot-button hot';
  } else {
    e.target.className = 'hot-button nuclear';
  }
});
