console.log("javascript connected!");

const heading = document.querySelector("h1");

const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    console.log(name);
    console.log(email);
    console.log(message);

});




