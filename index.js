// Handles user signup
function signup() {
  const p1 = document.getElementById("ps1").value;
  const p2 = document.getElementById("ps2").value;
  if (p1 === p2) {
    const apiUrl = "http://localhost:8080/createUser";
    const data = {
      username: document.getElementById("un1").value,
      email: document.getElementById("em1").value,
      password: p1,
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
          throw new Error("Server responded with an error");
        }
      })
      .catch((error) => {
        console.error("Error during signup: ", error);
      });
  } else {
    alert("Passwords do not match"); // Use an alert or update the DOM with the error
  }
}

// Prevents form default submission and calls signup
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    signup();
  });

// Fetches HTML content and updates the page
async function fetchHTML(url, callback) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Resource not found at ${url}`);
    }
    const html = await response.text();
    callback(html);
  } catch (error) {
    console.error("Error fetching the HTML:", error);
    document.getElementById("app").innerHTML =
      "<p>Requested page not found.</p>"; // A simple error message
  }
}

function loadContent(path) {
  fetchHTML(path, function (response) {
    document.getElementById("app").innerHTML = response;
  });
}

// SPA router
function router() {
  const routes = {
    "/": "index.html",
    forgot: "forgot.html", // Ensure there's no '/' before 'forgot'
    signup: "signup.html", // Ensure there's no '/' before 'signup'
  };

  let path = window.location.hash.substring(1) || '/';
  let contentURL = routes[path];

  if (contentURL) {
    loadContent(contentURL);
    // If the 'forgot' path is active, inject the CSS
    if (path === "forgot") {
      injectCSS("forgot.css", "forgotCss");
    } else {
      // If the path is not 'forgot', remove the CSS if it exists
      removeCSS("forgotCss");
    }
  } else {
    document.getElementById("app").innerHTML =
      "<p>Page not found. Please check the URL.</p>";
  }
}

function injectCSS(filename, id) {
  let link = document.getElementById(id);
  if (!link) {
    const head = document.head;
    link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = id;
    head.appendChild(link);
  }
  link.href = filename; 
}

function removeCSS(id) {
  const link = document.getElementById(id);
  if (link) {
    link.parentNode.removeChild(link);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
