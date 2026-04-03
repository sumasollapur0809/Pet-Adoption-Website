// LOGIN FUNCTION
function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter username and password!");
    return false;
  }

  let userData = {
    username: username,
    loginTime: new Date().toLocaleString()
  };

  localStorage.setItem("loggedInUser", JSON.stringify(userData));

  // ✅ store login success
  localStorage.setItem("loginSuccess", "true");

  // redirect to home
  window.location.href = "home.html";

  return false;
}


// ADOPTION FUNCTION
function handleAdoption(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let pet = document.getElementById("pet").value;

  if (name === "" || pet === "") {
    alert("Please fill all required fields!");
    return;
  }

  // store adoption message
  localStorage.setItem("adoptMsg", `Thanks ${name} for adopting a ${pet}! 😊❤️`);

  // reload page to trigger popup
  window.location.href = "adopt.html";
}


// POPUP FUNCTION (COMMON)
function showPopup(){
    let popup = document.getElementById("pop-up");

    if(!popup) return; // safety check

    let currentPage = window.location.pathname;

    //  LOGIN POPUP → only on home page
    if(localStorage.getItem("loginSuccess") === "true" && currentPage.includes("home.html")){
        popup.innerText = "You have logged in successfully 🥳";
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
            localStorage.removeItem("loginSuccess");
        }, 2000);
    }

    //  ADOPTION POPUP → only on adopt page
    let adoptMsg = localStorage.getItem("adoptMsg");
    if(adoptMsg && currentPage.includes("adopt.html")){
        popup.innerText = adoptMsg;
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
            localStorage.removeItem("adoptMsg");
        }, 3000);
    }
    window.onload = function () {
  showPopup();

  let selectedPet = localStorage.getItem("selectedPet");
  let petDropdown = document.getElementById("pet");

  if(selectedPet && petDropdown){
    petDropdown.value = selectedPet.toLowerCase();
  }
};
}

function checkLogin(){
  let user = localStorage.getItem("loggedInUser");

  // if not logged in → go to login page
  if(!user){
    window.location.href = "login.html";
  }
}
function selectPet(petName){
  localStorage.setItem("selectedPet", petName);
}

function handleSignup(e) {
  e.preventDefault();

  let inputs = document.querySelectorAll(".signup-container input");
  let password = inputs[3].value;
  let confirmPassword = inputs[4].value;

  // check empty fields
  for(let input of inputs){
    if(input.hasAttribute("required") && input.value === ""){
      alert("Please fill all required fields!");
      return false;
    }
  }

  // check password match
  if(password !== confirmPassword){
    alert("Passwords do not match!");
    return false;
  }

  //  success → store flag
  localStorage.setItem("loginSuccess", "true");

  // redirect
  window.location.href = "home.html";

  return false;
}