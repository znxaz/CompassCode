function signup() {
  const p1 = document.getElementById("ps1").value;
  const p2 = document.getElementById("ps2").value;
  if (p1 === p2) {
    const apiUrl = "http://localhost:8080/signup";
    const data = {
      username: document.getElementById("un1").value,
      email: document.getElementById("em1").value,
      password: document.getElementById("ps1").value,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/skills";
        } else {
          throw new Error("Network response was not okay");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  } else {
    console.log("passwords do no match");
  }
}

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    signup();
  });

window.addEventListener("hashchange", function () {
  if (window.location.hash === "#home") {
    document.getElementById("app").innerHTML =
      "<h1>Welcome to the home page!</h1>";
  }
});
