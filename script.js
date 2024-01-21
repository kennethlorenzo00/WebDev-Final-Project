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
    var form = document.getElementById("form2");

    var selectedReason = localStorage.getItem('selectedReason');

    var reasonInput = document.createElement("input");
    reasonInput.type = "hidden";
    reasonInput.name = "reason";
    reasonInput.value = selectedReason;
    form.appendChild(reasonInput);

    var areAllFieldsFilled = Array.from(form.elements).every(function(element) {
        return element.type !== 'text' || element.value.trim() !== '';
    });

    if (areAllFieldsFilled) {
        var confirmation = confirm("Are you sure you want to submit the form?");
        if (confirmation) {
            form.submit();
            alert('Form is submitted successfully!');
            window.location.href = "index.html";
        }
    } else {
        alert('Please fill out all fields before submitting.');
    }
}