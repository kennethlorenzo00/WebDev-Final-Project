function confirmAndGoBack() {
    var confirmation = confirm("Are you sure?");
    if (confirmation){
        window.location.href = 'page2.html';
    }
}
function checkRadioAndProceed() {
    var radios = document.getElementsByName('reason');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            localStorage.setItem('selectedReason', radios[i].value);
            window.location.href = 'page3.html';
            return;
        }
    }
    alert('Please select a reason.');
}

function submitForm() {
    var form = document.getElementById("form3");

    var selectedReason = localStorage.getItem('selectedReason');

    var reasonInput = document.createElement("input");
    reasonInput.type = "hidden";
    reasonInput.name = "reason";
    reasonInput.value = selectedReason;
    form.appendChild(reasonInput);

    var isStudentIDValid = /^\d{5}$/.test(document.getElementById("student-number").value.trim());
    var isEmailValid = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(document.getElementById("email").value.trim());
    var isPhoneNumberValid = /^\d{11}$/.test(document.getElementById("phone").value.trim());
    var isEmergencyContactValid = /^\d{11}$/.test(document.getElementById("emergency-phone").value.trim());

    var areAllFieldsFilled = Array.from(form.elements).every(function (element) {
        if (element.tagName.toLowerCase() === 'select') {
            return element.value.trim() !== '';
        } else if (element.type !== 'text') {
            return true; 
        }
        return element.value.trim() !== '';
    });

    if (areAllFieldsFilled && isStudentIDValid && isEmailValid && isPhoneNumberValid && isEmergencyContactValid) {
        var confirmation = confirm("Are you sure you want to submit the form?");
        if (confirmation) {
            form.submit();
            var message = 'Form is submitted successfully! Click OK to return to Home Page.'
            alert(message);
            window.location.href = "index.html";
        }
    } else {
        var errorMessage = 'Please correct the following errors before submitting: <br><br>';

        if (!areAllFieldsFilled) {
            errorMessage += '- All required fields must be filled out. <br>';
        }

        if (!isStudentIDValid) {
            errorMessage += '- Student ID should be a 5-digit number. <br>';
        }

        if (!isEmailValid) {
            errorMessage += '- Email address should be valid. <br>';
        }

        if (!isPhoneNumberValid) {
            errorMessage += '- Phone number should be a 11-digit number. <br>';
        }

        if (!isEmergencyContactValid) {
            errorMessage += '- Emergency contact number should be a 11-digit number. <br>';
        }

        document.getElementById("error-message-container").innerHTML = errorMessage;
        openErrorModal();
    }
}

function openErrorModal() {
    var modal = document.getElementById("error-modal");
    modal.style.display = "block";
}

function closeErrorModal() {
    var modal = document.getElementById("error-modal");
    modal.style.display = "none";
}




