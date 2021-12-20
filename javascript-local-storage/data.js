/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

window.addEventListener('beforeunload', function (e) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
