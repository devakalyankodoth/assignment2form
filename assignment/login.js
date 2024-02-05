function validateForm(event) {
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   var strongRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

   var emailInput = document.getElementById('email').value;
   var passwordInput = document.getElementById('password').value;
   var strengthIndicator = document.getElementById('password-strength');

      var password = passwordInput.value;
      var strongRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;
      var mediumRegex = /^(?=.[a-zA-Z])(?=.\d).{8,}$/;

    if (emailRegex.test(emailInput.value)) {
    isValid = false;
    alert('Invalid email address');
  }
    if (strongRegex.test(passwordInput.value)) {
         alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number");
    invalid = false;
  }
    if (strongRegex.test(password)) {
      strengthIndicator.style.color = 'green';
      strengthIndicator.textContent = 'Strong Password';
    } else if (mediumRegex.test(password)) {
      strengthIndicator.style.color = 'orange';
      strengthIndicator.textContent = 'Medium Password';
    } else {
      strengthIndicator.style.color = 'red';
      strengthIndicator.textContent = 'Weak Password';
    }
}