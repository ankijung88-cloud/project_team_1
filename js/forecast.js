// 예상 매출
const predictedSales = 1450000;
document.getElementById("predictedSales").innerText =
  predictedSales.toLocaleString() + "원";

// 혼잡도 데이터
const crowdData = [
  { time: "11:00-12:00", level: 60, label: "보통", color: "yellow" },
  { time: "12:00-13:00", level: 95, label: "혼잡", color: "red" },
  { time: "13:00-14:00", level: 85, label: "혼잡", color: "red" },
  { time: "14:00-17:00", level: 30, label: "한가함", color: "green" },
  { time: "17:00-19:00", level: 65, label: "보통", color: "yellow" },
  { time: "19:00-20:00", level: 90, label: "혼잡", color: "red" },
];

const crowdList = document.getElementById("crowdList");

crowdData.forEach((item) => {
  const row = document.createElement("div");
  row.className = "crowd-row";

  row.innerHTML = `
    <span>${item.time}</span>
    <div class="bar">
      <div class="bar-fill ${item.color}" style="width:${item.level}%">
        ${item.label}
      </div>
    </div>
    <span style="width:40px;text-align:right">${item.level}%</span>
  `;

  crowdList.appendChild(row);
});
