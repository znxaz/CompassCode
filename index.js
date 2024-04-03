document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("un1").value;
  const password = document.getElementById("ps1").value;

  if (username === "meow" && password === "meow") {
    window.location.hash = "home";
  } else {
    alert("Invalid username or password");
  }
});

window.addEventListener("hashchange", function () {
  if (window.location.hash === "#home") {
    document.getElementById("app").innerHTML = "<h1>Welcome to the home page!</h1>";
  }
});
