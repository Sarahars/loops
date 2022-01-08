var database = []; //emply list
// sign up
var userNameInput = document.getElementById("signup-user-name");
var passwordInput = document.getElementById("signup-password");
var signupBtn = document.getElementById("signup-btn");

// login
var logUserNameInput = document.getElementById("login-user-name");
var logPasswordInput = document.getElementById("login-password");
var loginBtn = document.getElementById("login-btn");

function signup() {
  var userInfo = {
    userName: userNameInput.value, //to get text from input
    password: passwordInput.value,
  };
  database.push(userInfo);
  alert("Hello " + userNameInput.value + " you are signed");
}

signupBtn.addEventListener("click", signup);
loginBtn.addEventListener("click", login);

function login() {
  var userInfo = {
    userName: logUserNameInput.value,
    password: logPasswordInput.value,
  };

  var lastElement = false;
  for (var i = 0; i < database.length; i++) {
    if (i === database.length - 1) {
      lastElement = true;
    }
    if (database[i].userName === userInfo.userName) {
      if (database[i].password === userInfo.password) {
        return alert("Authenticated successfuly!");
      } else {
        return alert("Chek your password!")
      }
    } else if (lastElement === true) {
      alert("No, he doesn't exist!");
    }
  }
}
