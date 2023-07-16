const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // prevent refresh
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  showGreetings(username);
}

function showGreetings(username) {
  const timelyGreeting = getGreetings();

  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `${timelyGreeting} ${username}`;
}

function getGreetings() {
  const date = new Date();
  const time = date.getHours();

  if (time >= 4 && time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time <= 16) {
    return "Good Afternoon";
  } else if (time >= 16 && time <= 23) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  showGreetings(savedUsername);
}
