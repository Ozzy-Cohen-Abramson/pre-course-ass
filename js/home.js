const GITHUB_URL = "https://api.github.com/users/Ozzy-Cohen-Abramson";

fetch(GITHUB_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //profile picture
        const profileImage = document.getElementById("profile-image");
        profileImage.src = data.avatar_url;

        //profile name
        const myName = document.getElementById('my-name');
        myName.textContent = data.login;
    });

// card open
let modal = document.getElementById('modal'); //modal
let modalOpener = document.querySelector('.card'); // getting the element that will open the modal

let span = document.getElementsByClassName("close")[0];

function modalOpenFunction() {
    modalOpener.onclick = function() {
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}