// Register
document.getElementById("registerdiv").addEventListener("submit", function(e) {
  e.preventDefault();
  const firstName = document.getElementById("regFirstName").value.trim();
  const lastName = document.getElementById("regLastName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const genderSave = document.querySelector('input[name]')("genderSave").value;

  if (!firstName || !email || !password || !genderSave || !lastName) {
    window.alert("Please fill in all fields.");
    return;
  }

  alert("Sucessfully registered!");
  registerModal.style.display = "none";
});

// Login
document.getElementById("logindiv").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Successfully logged in!");
  loginModal.style.display = "none";
});