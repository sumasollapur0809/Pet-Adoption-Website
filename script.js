document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops page reload
    let name = document.getElementById("name").value;
    let pet = document.getElementById("pet").value;
    if (name === "" || pet === "") {
      alert("Please fill all required fields!");
      return;
    }

    // 🎉 HAPPY MESSAGE
    alert(
      "🐾 Thank you " + name + "!\n\n" +
      "Your adoption request has been received successfully ❤️" +
      "Our team will contact you soon.\n\n" +
      "~ Your Furry Friends 🐶"
    );
    form.reset();
  });
});

function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter username and password!");
    return false;
  }
  // Save data
  let userData = {
    username: username,
    loginTime: new Date().toLocaleString()
  };

  localStorage.setItem("loggedInUser", JSON.stringify(userData));

  alert(
    "🐾 Welcome " + username + "!\n" +
    "Login successful ❤️\n" +
    "Find your furry friend today!"
  );

  window.location.href = "home.html";

  return false; // stop form reload
}
