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
    const steps = ["Receive invoice"];

    if (!vendor || !Number.isFinite(amount) || amount <= 0) {
        steps.push("Validate input");
        steps.push("Reject: missing required fields");
        steps.push("Archive as rejected");
        renderFlow(steps, "Rejected", "rejected");
        return;
    }

    if (!isVendorValid(vendor)) {
        steps.push("Validate vendor");
        steps.push("Reject: invalid vendor");
        steps.push("Archive as rejected");
        renderFlow(steps, "Rejected", "rejected");
        return;
    }

    steps.push("Validate invoice");

    if (suspicious) {
        steps.push("Route to manual review");
        steps.push("Security check");
        steps.push("Approve/Reject by reviewer");
        renderFlow(steps, "Manual review", "review");
        return;
    }

    if (amount > APPROVAL_THRESHOLD) {
        steps.push("Assign manager approval");
        steps.push("Manager decision");
        steps.push("Archive");
        renderFlow(steps, "Manager approval", "review");
        return;
    }

    steps.push("Auto approve");
    steps.push("Archive");
    renderFlow(steps, "Approved", "approved");
}

runFlowBtn.addEventListener("click", runFlow);
