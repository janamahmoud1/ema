const correctPassword = "2072005";

function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  if (passwordInput === correctPassword) {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("message-page").classList.remove("hidden");
  } else {
    alert("Wrong password! Please try again.");
  }
}

function showVideo() {
  document.getElementById("message-page").classList.add("hidden");
  document.getElementById("video-page").classList.remove("hidden");
}
