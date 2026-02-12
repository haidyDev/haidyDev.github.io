const toggleViewsBtn = document.getElementById("toggleViewsBtn");
const beforeSection = document.getElementById("beforeSection");
const afterSection = document.getElementById("afterSection");
const backToDemosLink = document.getElementById("backToDemosLink");

if (backToDemosLink) {
    const query = window.location.search || "";
    backToDemosLink.setAttribute("href", "/demos/" + query);
}

if (toggleViewsBtn && beforeSection && afterSection) {
    toggleViewsBtn.addEventListener("click", () => {
        beforeSection.classList.toggle("is-hidden");
        afterSection.classList.toggle("is-hidden");
    });
}
