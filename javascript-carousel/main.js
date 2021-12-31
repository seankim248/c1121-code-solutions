var $container = document.querySelector('.container');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');
var $circles = document.querySelectorAll('[data-id]');

var imgArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var current = 0;
var interval = setInterval(showNextImg, 3000);

$container.addEventListener('click', changeImage);
function changeImage(event) {
  if (event.target.className === 'far fa-circle') {
    current = parseInt(event.target.getAttribute('data-id'));
    $img.setAttribute('src', imgArr[current]);
    change();
  }
}

$leftArrow.addEventListener('click', function () {
  current--;
  if (current < 0) {
    current = imgArr.length - 1;
  }
  change();
});

$rightArrow.addEventListener('click', showNextImg);

function change() {
  $img.setAttribute('src', imgArr[current]);
  for (var i = 0; i < $circles.length; i++) {
    $circles[i].className = 'far fa-circle';
    if (current === i) {
      $circles[i].className = 'fas fa-circle';
    }
  }
  clearInterval(interval);
  interval = setInterval(showNextImg, 3000);
}

function showNextImg() {
  current++;
  if (current >= imgArr.length) {
    current = 0;
  }
  change();
}
