var link = document.querySelector(".write-us");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storageName) {
        userName.value = storageName;
        email.focus();
    } 
        if(storageEmail) {
            email.value = storageEmail;
            text.focus();
        } else {
            userName.focus();
        }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
    } 
        else {
            localStorage.setItem("userName", userName.value);
            localStorage.setItem("email", email.value);
        }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});