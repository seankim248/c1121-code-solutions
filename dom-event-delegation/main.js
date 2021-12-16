var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (e) {
  if (e.target && e.target.nodeName === 'BUTTON') {
    console.log(e.target.closest('.task-list-item'));
    e.target.closest('.task-list-item').remove();
  }
});
