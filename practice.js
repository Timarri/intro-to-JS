//Validate Email
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

const email = "test@example.com";

if (isValidEmail(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}
//validate phone number
function isValidPhoneNumber(phone) {
  return /^\d{10}$/.test(phone);
}

const phone = "1234567890";

if (isValidPhoneNumber(phone)) {
  console.log("Valid phone number");
} else {
  console.log("Invalid phone number");
}
//Random number 

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

const randomNum = getRandomNumber();
console.log("Random number between 1 and 20:", randomNum);
// validate name
function validateName() {
  let nameInput = document.forms["formname"]["name"].value; 
  if (nameInput === "") {
    alert("Name must be filled out!");
    return false; 
  }
  return true; 
}
