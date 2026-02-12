const addBtn = document.getElementById("addBtn");
const caseInput = document.getElementById("caseInput");
const statusSelect = document.getElementById("statusSelect");
const caseList = document.getElementById("caseList");
const emptyState = document.getElementById("emptyState");

// Data model (Power Apps -henkinen ajatus: items collection)
let cases = [];

function statusToBadgeClass(status) {
    if (status === "New") return "new";
    if (status === "In Progress") return "progress";
    return "done";
}

function render() {
    caseList.innerHTML = "";

    if (cases.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    for (const item of cases) {
        const row = document.createElement("div");
        row.className = "item";

        const title = document.createElement("div");
        title.className = "itemTitle";
        title.textContent = item.title;

        const badge = document.createElement("span");
        badge.className = `badge ${statusToBadgeClass(item.status)}`;
        badge.textContent = item.status;

        const del = document.createElement("button");
        del.className = "ghost";
        del.textContent = "Delete";
        del.addEventListener("click", () => {
            cases = cases.filter(c => c.id !== item.id);
            render();
        });

        row.appendChild(title);
        row.appendChild(badge);
        row.appendChild(del);

        caseList.appendChild(row);
    }
}

addBtn.addEventListener("click", () => {
    const title = caseInput.value.trim();
    const status = statusSelect.value;

    if (!title) {
        alert("Add case title");
        return;
    }

    cases.unshift({
        id: crypto.randomUUID(),
        title,
        status
    });

    caseInput.value = "";
    caseInput.focus();

    render();
});

// initial render
render();
