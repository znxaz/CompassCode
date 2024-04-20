import { login, signup, forgotPassword } from './api.js';
// Fetches HTML content and updates the page
async function fetchHTML(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Resource not found at ${url}, status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching the HTML:", error);
    return "<p>Requested page not found.</p>"; // Return error HTML
  }
}

async function loadContent(path, callback) {
  const html = await fetchHTML(path);
  document.getElementById("app").innerHTML = html;
  if (typeof callback === "function") {
    callback();
  }
}

// SPA router
function router() {
  const routes = {
    "/": "index.html",       // Main page, typically for login
    "forgot": "forgot.html", // Forgot password page
    "signup": "signup.html", // Signup page
    "skills": "skills.html", // A skills demonstration page
  };

  let path = window.location.hash.substring(1) || "/";
  let contentURL = routes[path];

  if (contentURL) {
    loadContent(contentURL, function() {
      setupForm(path); // Setup form after the content is loaded

      // Handle CSS injections or removals based on the current page
      handleCSS(path);
    });
  } else {
    document.getElementById("app").innerHTML = "<p>Page not found. Please check the URL.</p>";
  }
}

function setupForm(path) {
  // Identify and setup the form based on the current path
  if (path === "signup") {
    const form = document.getElementById("signup-form");
    if (form) form.onsubmit = function(event) {
      event.preventDefault();
      signup();
    };
  } else if (path === "forgot") {
    const form = document.getElementById("forgot-form");
    if (form) form.onsubmit = function(event) {
      event.preventDefault();
      forgotPassword();
    };
  } else if (path === "/" || path === "login") { 
    const form = document.getElementById("login-form");
    if (form) form.onsubmit = function(event) {
      event.preventDefault();
      login();
    };
  }
}

function handleCSS(path) {
  if (path === "forgot") {
    injectCSS("forgot.css", "forgotcss");
  } else {
    removeCSS("forgotcss");
  }
}

function injectCSS(filename, id) {
  let link = document.getElementById(id);
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
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
