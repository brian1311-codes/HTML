const displayData = [];
for (let i = 1; i <= 40; i++) {
    displayData.push({
        lineNo: i,
        dayPlanPcs: Math.floor(Math.random() * 10000) + 1000, 
        hrPlanPcs: Math.floor(Math.random() * 5000) + 500,
        hrActualPcs: Math.floor(Math.random() * 5000) + 500,
    });
}

function updateDisplay() {
    const selectedIndex = document.getElementById("displaySelect").value;

    if (selectedIndex === "") return; 

    const data = displayData[selectedIndex];

    document.getElementById("lineNo").innerText = data.lineNo;
    document.getElementById("dayPlanPcs").innerText = data.dayPlanPcs;
    document.getElementById("hrPlanPcs").innerText = data.hrPlanPcs;
    document.getElementById("hrActualPcs").innerText = data.hrActualPcs;

    // Calculate efficiency
    const hrPlanEfficiency = ((data.hrPlanPcs / data.dayPlanPcs) * 100).toFixed(2);
    const hrActualEfficiency = ((data.hrActualPcs / data.dayPlanPcs) * 100).toFixed(2);

    document.getElementById("hrPlanEfficiency").innerText = hrPlanEfficiency + "%";
    document.getElementById("hrActualEfficiency").innerText = hrActualEfficiency + "%";
}
