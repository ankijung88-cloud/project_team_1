// 오늘 매출
const todaySales = 1234500;
document.getElementById("todaySales").innerText =
  todaySales.toLocaleString() + "원";

// 주간 매출 데이터
const trends = [
  { day: "월", sales: 920000, percent: 92 },
  { day: "화", sales: 850000, percent: 85 },
  { day: "수", sales: 1100000, percent: 100 },
  { day: "목", sales: 890000, percent: 89 },
  { day: "금", sales: 1050000, percent: 95 },
  { day: "토", sales: 850000, percent: 85, current: true },
];

const list = document.getElementById("trendList");

trends.forEach((item) => {
  const row = document.createElement("div");
  row.className = "trend-item";

  row.innerHTML = `
    <span style="width:30px">${item.day}</span>
    <div class="bar">
      <div class="bar-fill ${item.current ? "current" : "normal"}"
           style="width:${item.percent}%">
        ${item.sales.toLocaleString()}원
      </div>
    </div>
  `;

  list.appendChild(row);
});
