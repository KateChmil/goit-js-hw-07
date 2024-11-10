const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", () => {
    const inputValue = inputName.value.trim()

    if (inputValue) {
        outputName.textContent = inputValue
    } else {
        outputName.textContent = "Anonymous";
    }

});
 