function consoleFunction() {
    event.preventDefault(); //prevent from the page to reload when pressing on the submit button.
    console.log("First name: " + fname.value + ' , ' + "Last name: " + lname.value + ' , ' + "Email: " + email.value + ' , ' + "Date of birth: " + bDate.value + ' , ' + "Comment: " + uComment.value);
    alert("Your information was sent succesfully. Thank you!");
}

function textDis() {
    var btn = document.getElementById('submit');
    if (document.querySelector('#fname').value != '' && document.querySelector('#email').value != '' && document.querySelector('#bDate').value != '' && document.querySelector('#uComment').value != '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}