const errorToggle = document.getElementById("errorToggle");
const demoInput = document.getElementById("demoInput");
const inputError = document.getElementById("inputError");

function updateErrorState() {
    const showError = errorToggle.checked;
    demoInput.classList.toggle("is-error", showError);
    inputError.textContent = showError ? "Anna kelvollinen sähköpostiosoite." : "";
}

errorToggle.addEventListener("change", updateErrorState);
updateErrorState();

