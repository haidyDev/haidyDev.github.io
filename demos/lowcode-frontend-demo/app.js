// 1) Haetaan käyttöliittymän elementit (vastaa Power Apps -kontrolleja)
const inputEl = document.getElementById("userInput");
const buttonEl = document.getElementById("submitBtn");
const messageEl = document.getElementById("message");

// 2) Aputoiminto: viestin näyttäminen käyttäjälle
function showMessage(text, type) {
    messageEl.textContent = text;

    if (type === "error") {
        messageEl.style.color = "#ffb4b4";
    } else {
        messageEl.style.color = "#b8ffcb";
    }
}

// 3) Varsinainen logiikka: input → validation → output
function handleSubmit() {
    const value = inputEl.value.trim();

    // Validointi: onko syöte tyhjä?
    if (value === "") {
        showMessage("Syötä jotain ennen kuin jatkat.", "error");
        return;
    }

    // Onnistunut syöte
    showMessage(`Syötit: "${value}"`, "ok");
}

// 4) Tapahtuma: nappia painettaessa ajetaan logiikka
buttonEl.addEventListener("click", handleSubmit);

// (käytettävyys) Enter-näppäin tekee saman kuin nappi
inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSubmit();
    }
});
