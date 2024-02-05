        function validateForm(event) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          var phoneRegex = /^\d{10}$|^\d{3}[-.\s]\d{3}[-.\s]\d{4}$/;
          var strongRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;
    
          var emailInput = document.getElementById('email');
          var phoneInput = document.getElementById('phone');
          var password = document.getElementById("password").value;
          var strengthIndicator = document.getElementById("password-strength");
    
          let isValid = true;
    
          if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            alert('Invalid email address');
          }
    
          if (!phoneRegex.test(phoneInput.value)) {
            isValid = false;
            alert('Invalid phone number. Use this format: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX');
          }

          if (strongRegex.test(passwordInput.value)) {
            isValid = false;
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number");
            return false;
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