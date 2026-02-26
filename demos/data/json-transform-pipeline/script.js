const inputEl = document.getElementById("jsonInput");
const outputEl = document.getElementById("jsonOutput");
const transformBtn = document.getElementById("transformBtn");

const sampleData = [
    { id: 1, name: "Anna", status: "active", score: 92 },
    { id: 2, name: "Mikko", status: "inactive", score: 71 },
    { id: 3, name: "Leena", status: "active", score: 84 }
];

function transformData(items) {
    return items
        .filter((item) => item.status === "active")
        .map((item) => ({
            userId: item.id,
            fullName: item.name,
            points: item.score
        }));
}

function runTransform() {
    try {
        const parsed = JSON.parse(inputEl.value);
        if (!Array.isArray(parsed)) {
            throw new Error("Syötteen on oltava JSON-taulukko.");
        }

        const result = transformData(parsed);
        outputEl.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        outputEl.textContent = "Virhe: " + error.message;
    }
}

inputEl.value = JSON.stringify(sampleData, null, 2);
runTransform();

transformBtn.addEventListener("click", runTransform);

