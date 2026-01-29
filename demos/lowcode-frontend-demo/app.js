// 1) Haetaan käyttöliittymän elementit (vastaa Power Apps -kontrolleja)
const inputEl = document.getElementById("userInput");
const buttonEl = document.getElementById("submitBtn");
const messageEl = document.getElementById("message");

// 2) Aputoiminto: viestin näyttäminen käyttäjälle (tila: ok / error)
function showMessage(text, type) {
    messageEl.textContent = text;

    // Poistetaan vanhat tilaluokat
    messageEl.classList.remove("message--error", "message--ok");

    // Lisätään oikea tila
    if (type === "error") {
        messageEl.classList.add("message--error");
    } else {
        messageEl.classList.add("message--ok");
    }
}

// 3) Varsinainen logiikka: input → validation → output
function handleSubmit() {
    const value = inputEl.value.trim();

    // Validointi 1: tyhjä syöte
    if (value === "") {
        showMessage("Syötä jotain ennen kuin jatkat.", "error");
        return;
    }

    // Validointi 2: liian lyhyt syöte
    if (value.length < 3) {
        showMessage("Syötteen tulee olla vähintään 3 merkkiä.", "error");
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
