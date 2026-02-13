const queryButtons = document.querySelectorAll(".query-btn");
const queryViews = document.querySelectorAll(".query-view");

function setActiveQuery(targetId) {
    queryButtons.forEach((button) => {
        const isActive = button.getAttribute("data-query-target") === targetId;
        button.classList.toggle("is-active", isActive);
    });

    queryViews.forEach((view) => {
        const isActive = view.id === targetId;
        view.classList.toggle("is-active", isActive);
    });
}

queryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-query-target");
        setActiveQuery(targetId);
    });
});
