var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === e.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }

    var dataView = e.target.getAttribute('data-view');
    for (var j = 0; j < $views.length; j++) {
      if ($views[j].getAttribute('data-view') === dataView) {
        $views[j].className = 'view';
      } else {
        $views[j].className = 'view hidden';
      }
    }
  }
});
