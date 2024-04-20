import { login, signup, forgotPassword } from './api.js';

const currentCSS = new Set();  // Keeps track of currently injected CSS files

async function fetchHTML(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Resource not found at ${url}, status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching the HTML:", error);
    return "<p>Requested page not found.</p>";
  }
}

async function loadContent(path, callback) {
  const html = await fetchHTML(path);
  document.getElementById("app").innerHTML = html;
  if (typeof callback === "function") {
    callback();
  }
}

function router() {
  const routes = {
    "/": "index.html",
    "forgot": "forgot.html",
    "signup": "signup.html",
    "skills": "skills.html"
  };

  const path = window.location.hash.substring(1) || "/";
  const contentURL = routes[path];

  if (contentURL) {
    loadContent(contentURL, () => {
      setupForm(path);
      handleCSS(path);
    });
  } else {
    document.getElementById("app").innerHTML = "<p>Page not found. Please check the URL.</p>";
  }
}

function setupForm(path) {
  // Simplified for clarity
  const formId = {
    "/": "login-form",
    "signup": "signup-form",
    "forgot": "forgot-form"
  }[path] || "login-form";  // Default to login-form if path is '/'

  const form = document.getElementById(formId);
  if (form) {
    form.onsubmit = function(event) {
      event.preventDefault();
      const action = { "/": login, "signup": signup, "forgot": forgotPassword }[path];
      action();
    };
  }
}

function handleCSS(path) {
  const requiredCSS = {
    "/": ["common.css", "styles.css"],
    "forgot": ["forgot.css", "common.css", "styles.css"],
    "signup": ["common.css", "styles.css"],
    "skills": ["skills.css"]
  };

  // Remove all CSS not needed for the current path
  Array.from(currentCSS).forEach(css => {
    if (!requiredCSS[path].includes(css)) {
      removeCSS(css);
      currentCSS.delete(css);
    }
  });

  // Add required CSS for the current path
  requiredCSS[path].forEach(css => {
    if (!currentCSS.has(css)) {
      injectCSS(css);
      currentCSS.add(css);
    }
  });
}

function injectCSS(file) {
  const id = file.replace('.css', '') + '-style';
  let link = document.getElementById(id);
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = file;
    document.head.appendChild(link);
  }
}

function removeCSS(file) {
  const id = file.replace('.css', '') + '-style';
  const link = document.getElementById(id);
  if (link) {
    link.parentNode.removeChild(link);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
