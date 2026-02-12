const btn = document.getElementById("testBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
    status.textContent = "Status: action triggered";
});
