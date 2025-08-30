
document.getElementById('scroll-right').onclick = function() {
    console.log('Button clicked');
    document.getElementById('skills-row').scrollBy({ left: 300, behavior: 'smooth' });
};

document.getElementById('scroll-right-projects').onclick = function() {
    console.log('Button clicked');
    document.getElementById('projects-row').scrollBy({ left: 300, behavior: 'smooth' });
};

document.getElementById('skill').onclick = function() {
    document.getElementById('skills-row').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('proj').onclick = function() {
    document.getElementById('projects-row').scrollIntoView({ behavior: 'auto' }); 
    }

document.getElementById('endorse').onclick = function() {
    document.getElementById('endorsementDisplay').scrollIntoView({ behavior: 'auto' }); 
    }

document.getElementById('contact').onclick = function() {
    document.getElementById('contactDisplay').scrollIntoView({ behavior: 'auto' }); 
    }

document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
    document.getElementById('selectedState').textContent = this.textContent; // update placeholder
    document.getElementById('inputState').value = this.textContent; // set hidden input value
  });
});

document.getElementById('submitBtn').onclick = function () {
    let pin=document.getElementById("inputZip").value.trim();
    let fname = document.getElementById("inputFirstName4").value.trim();
    let lname = document.getElementById("inputLastName4").value.trim();
    let email = document.getElementById("inputEmail4").value.trim();
    let phone = document.getElementById("inputPhone4").value.trim();
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let pinError=document.getElementById('pinError');
    let valid = true;

    // Reset old errors
    emailError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    pinError.textContent="";



    // ✅ Email validation regex (basic format check)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (fname === "") {
        fnameError.textContent = "First name is required.";
        valid = false;
    }

    
    if (lname === "") {
        lnameError.textContent = "Last name is required.";
        valid = false;
    }

    // ✅ Phone validation regex (10 digits, India format)
    let phonePattern = /^[6-9]\d{9}$/; 
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        valid = false;
    }

    let pinPattern=/^[0-9]\d{6}$/;

    if(!pinPattern.test(pin)){
        pinError.textContent="Please enter a valid 6-digit PIN.";
        valid=false;
    }

    if (valid) {
        document.getElementById('submitAck').textContent = "✅ Thanks for reaching out! I'll get back to you soon.";
        document.getElementById('submitAck').style.color = "green";
    } else {
        document.getElementById('submitAck').textContent = "";
    }
}

