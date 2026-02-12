const toggleViewsBtn = document.getElementById("toggleViewsBtn");
const beforeSection = document.getElementById("beforeSection");
const afterSection = document.getElementById("afterSection");

if (toggleViewsBtn && beforeSection && afterSection) {
    toggleViewsBtn.addEventListener("click", () => {
        beforeSection.classList.toggle("is-hidden");
        afterSection.classList.toggle("is-hidden");
    });
}
