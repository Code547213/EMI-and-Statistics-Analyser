function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let passwordy = document.getElementById("passwordInvalid");
  if (username == "" || password == "") {
    alert("Please fill in all the fields.");
  } else {
 
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!password.match(passwordRegex)) {
      alert("Password must contain from 7 to 15 characters, including  one digit, and one special character (!@#$%^&*).");
      
      return false;
    }
  }
}
