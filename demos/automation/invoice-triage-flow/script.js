const amountInput = document.getElementById("invoiceAmount");
const vendorInput = document.getElementById("vendorName");
const suspiciousSelect = document.getElementById("suspicious");
const runFlowBtn = document.getElementById("runFlowBtn");
const flowStepsEl = document.getElementById("flowSteps");
const finalStatusEl = document.getElementById("finalStatus");

const APPROVAL_THRESHOLD = 2000;
const blockedVendors = ["", "unknown", "test vendor", "fraud corp"];

function isVendorValid(name) {
    const normalized = String(name || "").trim().toLowerCase();
    if (!normalized) return false;
    return blockedVendors.indexOf(normalized) === -1;
}

function renderFlow(steps, finalStatus, statusClass) {
    flowStepsEl.innerHTML = "";
    steps.forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        flowStepsEl.appendChild(li);
    });

    finalStatusEl.textContent = finalStatus;
    finalStatusEl.className = "badge " + statusClass;
}

function runFlow() {
    const amount = Number(amountInput.value);
    const vendor = vendorInput.value.trim();
    const suspicious = suspiciousSelect.value === "yes";
    const steps = ["Vastaanota lasku"];

    if (!vendor || !Number.isFinite(amount) || amount <= 0) {
        steps.push("Validoi syöte");
        steps.push("Hylkää: pakollisia kenttiä puuttuu");
        steps.push("Arkistoi hylättynä");
        renderFlow(steps, "Hylätty", "rejected");
        return;
    }

    if (!isVendorValid(vendor)) {
        steps.push("Validoi toimittaja");
        steps.push("Hylkää: virheellinen toimittaja");
        steps.push("Arkistoi hylättynä");
        renderFlow(steps, "Hylätty", "rejected");
        return;
    }

    steps.push("Validoi lasku");

    if (suspicious) {
        steps.push("Ohjaa manuaaliseen tarkistukseen");
        steps.push("Tietoturvatarkistus");
        steps.push("Tarkistajan hyväksyntä/hylkäys");
        renderFlow(steps, "Manuaalinen tarkistus", "review");
        return;
    }

    if (amount > APPROVAL_THRESHOLD) {
        steps.push("Ohjaa esihenkilön hyväksyntään");
        steps.push("Esihenkilön päätös");
        steps.push("Arkistoi");
        renderFlow(steps, "Esihenkilön hyväksyntä", "review");
        return;
    }

    steps.push("Hyväksy automaattisesti");
    steps.push("Arkistoi");
    renderFlow(steps, "Hyväksytty", "approved");
}

runFlowBtn.addEventListener("click", runFlow);

