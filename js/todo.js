const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteTodo(event) {
  const targetListItem = event.target.parentElement;
  targetListItem.remove();
  todos = todos.filter((item) => item.id !== parseInt(targetListItem.id));
  saveTodos();
}

function paintTodo(newTodoObj) {
  const listItem = document.createElement("li");
  listItem.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "X";
  span.innerText = newTodoObj.text;

  listItem.appendChild(span);
  listItem.appendChild(button);
  button.addEventListener("click", deleteTodo);
  todoList.appendChild(listItem);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
