document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const forgotForm = document.getElementById("forgot-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      login();
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      signup();
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener("submit", function (event) {
      event.preventDefault();
      forgotPassword();
    });
  }
});

export function login() {
  const username = document.getElementById("un1").value;
  const password = document.getElementById("ps1").value;

  const apiUrl = "http://localhost:8080/login";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.success) {
      window.location.hash = 'skills'; 
    } else {
      // Handle failed login
      console.error("Login failed:", data.message || 'No error message provided');
    }
  })
  .catch((error) => {
    console.error('Login failed:', error.message || 'An unknown error occurred');
  });
}

export function forgotPassword() {
    const usernameOrEmail = document.getElementById('user-or-email').value;
    console.log(usernameOrEmail);  
    const apiUrl = 'http://localhost:8080/forgotPassword';
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let requestBody;
    if (emailRegex.test(usernameOrEmail)) {
        requestBody = { username: "", email: usernameOrEmail };
    } else {
        requestBody = { username: usernameOrEmail, email: "" };
    }
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        if (data.success) {
            console.log("Recovery email sent successfully:", data.message);  // Optionally, display message to the user
        } else {
            console.error("Failed to send recovery email:", data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}


export function signup(){
  const username = document.getElementById('un1').value;
  const email = document.getElementById('em1').value;
  const password1 = document.getElementById('ps1').value;
  const password2 = document.getElementById('ps2').value;

  if(password1 !== password2){
    console.error("Passwords do not match.");
    return;
  }

  const apiUrl = "http://localhost:8080/createUser";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password: password1 }), 
  })
  .then(response => response.text())   //read the response as text
  .then(text => {
      try {
          const data = JSON.parse(text);  
          if (data.success) {
              window.location.hash = ''; 
          } else {
              console.error('Operation failed:', data.message);
          }
      } catch (error) {
          console.error('Failed to parse JSON:', error, 'Response:', text);
      }
  })
  .catch(error => console.error('Error in fetch:', error));
}