var $modalButton = document.querySelector('.open-modal');
var $overlay = document.querySelector('.no-overlay');
var $modal = document.querySelector('.no-modal');
var $noButton = document.querySelector('.no');

$modalButton.addEventListener('click', function (e) {
  $overlay.className = 'overlay';
  $modal.className = 'modal';
});

$noButton.addEventListener('click', function (e) {
  $overlay.className = 'no-overlay';
  $modal.className = 'no-modal';
});
