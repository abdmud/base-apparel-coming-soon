const submitButton = document.querySelector(".button");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error");
const formField = document.getElementById("email");

submitButton.addEventListener("click", () => {
    errorMsg.classList.remove("hidden")
    errorIcon.classList.remove("hidden")
    submitButton.style.marginLeft = "5%";
    formField.style.borderColor = "red";
})