

function consoleFunction() {
    event.preventDefault(); //prevent from the page to reload when pressing on the submit button.
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let bDate = document.getElementById('bDate').value;
    let comment = document.getElementById('uComment').value;
    let pName =  "first name: " + fName  + ",";
    let pLastName = " last name: " + lName + ",";
    let pEmail = " email: " + email + ",";
    let pBDate = " birth Date: " + bDate + ",";
    let pComment = " comment: " + comment + ",";
    //const footerExp = document.getElementById(nameOfTheElementToAtach);
    let sentence = pName + pLastName  + pEmail + pBDate + pComment;
    let disSentence = fName + email + bDate + comment;
    console.log(sentence);
}

function textDis() {
    let btn = document.getElementById('submit');
    if (document.getElementById('fname').value != '' && document.querySelector('#email').value != '' && document.querySelector('#bDate').value != '' && document.querySelector('#uComment').value != '') {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}