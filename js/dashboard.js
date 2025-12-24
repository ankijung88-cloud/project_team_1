const salesData = [
  { day: "월", sales: 920000, percent: 92 },
  { day: "화", sales: 850000, percent: 85 },
  { day: "수", sales: 1100000, percent: 100 },
  { day: "목", sales: 890000, percent: 89 },
  { day: "금", sales: 1050000, percent: 95 },
  { day: "토", sales: 850000, percent: 85, current: true },
];

const salesTrendDiv = document.getElementById("salesTrend");

salesData.forEach((item) => {
  const trendItem = document.createElement("div");
  trendItem.className = "trend-item";

  const daySpan = document.createElement("span");
  daySpan.className = "trend-day";
  daySpan.textContent = item.day;
  if (item.current) daySpan.style.color = "#4f46e5";

  const barDiv = document.createElement("div");
  barDiv.className = "trend-bar";
  barDiv.style.width = item.percent + "%";
  barDiv.style.background = item.current
    ? "linear-gradient(to right,#4f46e5,#7c3aed)"
    : "#9ca3af";
  barDiv.textContent = item.sales.toLocaleString() + "원";

  trendItem.appendChild(daySpan);
  trendItem.appendChild(barDiv);
  salesTrendDiv.appendChild(trendItem);
});
