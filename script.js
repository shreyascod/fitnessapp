var darkButton = document.getElementById("darkButton");

function darkMode() {
    var htmlBody = document.body;
    htmlBody.classList.toggle("dark-mode");
};

darkButton.addEventListener("click",darkMode);

var menuButton = document.getElementById("menuButton");

function menuOn() {
    var htmlBody = document.body;
    htmlBody.classList.toggle("visibility");
};

menuButton.addEventListener("click",menuOn);

var buttonUp = document.getElementById("buttonUp");

function toTop() {
    document.documentElement.scrollTo({top:0, bahavior: "smooth"});
};

buttonUp.addEventListener("click",toTop);

var signUpButton = document.getElementById("signUpButton");
var signUpModal = document.getElementById("signUpModal");
var closeModalButton = document.getElementById("closeModalButton");

function openSignUpModal() {
    signUpModal.style.display = "flex";
};

function closeSignUpModal () {
    signUpModal.style.display = "none" ;
}

signUpButton.addEventListener("click",openSignUpModal);
closeModalButton.addEventListener("click",closeSignUpModal);
// Get modal element
const loginModal = document.getElementById('loginModal');

// Function to open the login modal
function openLoginModal() {
    loginModal.style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    loginModal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
}

// Attach open function to existing login button
document.querySelector('.login-button').addEventListener('click', openLoginModal);

// Form validation (you can customize this based on your requirements)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission for demonstration
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Logged in successfully!'); // Replace this with your login logic
        closeLoginModal();
    } else {
        alert('Please fill in all fields.');
    }
}

);

