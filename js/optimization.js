const staffInput = document.getElementById("staff");
const inventoryInput = document.getElementById("inventory");
const ordersInput = document.getElementById("orders");
const generateBtn = document.getElementById("generateBtn");

const inputDataDiv = document.getElementById("inputData");
const strategyDiv = document.getElementById("strategy");
const ctx = document.getElementById("dataChart").getContext("2d");

let chart;

generateBtn.addEventListener("click", function () {
  const staff = parseInt(staffInput.value) || 0;
  const inventory = parseInt(inventoryInput.value) || 0;
  const orders = parseInt(ordersInput.value) || 0;

  // 입력 데이터 표시
  inputDataDiv.innerHTML = `
    <p>인력 수: ${staff}명</p>
    <p>재고량: ${inventory}개</p>
    <p>하루 예상 주문 수: ${orders}개</p>
  `;

  // 전략 제안 로직
  let strategy = "";
  if (staff <= 0 || inventory <= 0 || orders <= 0) {
    strategy = "모든 데이터를 올바르게 입력해주세요.";
  } else {
    const staffEfficiency = orders / staff;
    const inventoryDays = Math.floor(inventory / orders);

    strategy += `<p>📊 인력 효율: 하루 주문 ${staffEfficiency.toFixed(
      1
    )}개/인력</p>`;
    strategy += `<p>📦 재고 지속 가능 기간: 약 ${inventoryDays}일</p>`;

    if (staffEfficiency > 20) {
      strategy += `<p>⚠️ 현재 인력으로 주문량 감당이 어려움. 추가 인력 배치 필요.</p>`;
    } else {
      strategy += `<p>✅ 인력 배치 적정.</p>`;
    }

    if (inventoryDays < 3) {
      strategy += `<p>⚠️ 재고가 빠르게 소진됩니다. 재고 보충 필요.</p>`;
    } else if (inventoryDays < 7) {
      strategy += `<p>⚠️ 재고 관리 주의 필요.</p>`;
    } else {
      strategy += `<p>✅ 재고 충분.</p>`;
    }

    strategy += `<p>💡 운영 전략 제안: 주문량과 재고, 인력을 기반으로 최적 배치를 고려하세요.</p>`;
  }

  strategyDiv.innerHTML = strategy;

  // 차트 그리기
  const labels = ["인력", "재고", "하루 주문"];
  const dataValues = [staff, inventory, orders];

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    data: {
      labels: labels,
      datasets: [
        {
          type: "bar",
          label: "데이터 값",
          data: dataValues,
          backgroundColor: ["#4f46e5", "#6366f1", "#8b5cf6"],
          borderRadius: 5,
        },
        {
          type: "line",
          label: "트렌드",
          data: dataValues,
          borderColor: "#f59e0b",
          borderWidth: 2,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: { y: { beginAtZero: true } },
    },
  });
});
