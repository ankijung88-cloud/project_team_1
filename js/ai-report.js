// 샘플 데이터 생성
const generateSampleData = () => {
  const dates = [];
  const dailySales = [];
  const hourlySales = [];
  const weeklyAvg = [];

  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = `${d.getMonth() + 1}/${d.getDate()}`;
    dates.push(dateStr);

    // 하루 총 매출
    const sales = Math.floor(Math.random() * 1000000) + 200000;
    dailySales.push(sales);

    // 시간대별 매출 (0~23시)
    const hours = [];
    for (let h = 0; h < 24; h++) {
      hours.push(Math.floor(Math.random() * 50000) + 5000);
    }
    hourlySales.push(hours);
  }

  // 주별 평균
  for (let w = 0; w < 4; w++) {
    const weekSales = dailySales.slice(w * 7, w * 7 + 7);
    const avg = Math.floor(
      weekSales.reduce((a, b) => a + b, 0) / weekSales.length
    );
    weeklyAvg.push(avg);
  }

  return { dates, dailySales, hourlySales, weeklyAvg };
};

const data = generateSampleData();

// 선형 그래프 - 일자별 총 매출
const ctxLine = document.getElementById("lineChart").getContext("2d");
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: data.dates,
    datasets: [
      {
        label: "일자별 총 매출",
        data: data.dailySales,
        borderColor: "rgba(79,70,229,1)",
        backgroundColor: "rgba(79,70,229,0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (v) => v.toLocaleString() + "원" },
      },
      x: { title: { display: true, text: "날짜" } },
    },
  },
});

// 가로 막대그래프 - 주별 평균
const ctxBar = document.getElementById("barChart").getContext("2d");
new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["1주차", "2주차", "3주차", "4주차"],
    datasets: [
      {
        label: "주별 평균 매출",
        data: data.weeklyAvg,
        backgroundColor: "rgba(79,70,229,0.6)",
        borderColor: "rgba(79,70,229,1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: { ticks: { callback: (v) => v.toLocaleString() + "원" } },
      y: { title: { display: true, text: "주차" } },
    },
    plugins: { legend: { display: false } },
  },
});

// AI 분석 결과
const aiResult = document.getElementById("aiResult");

async function fetchAIAnalysis(dailySales, hourlySales, weeklyAvg) {
  try {
    const prompt = `
최근 30일 매출: ${dailySales.join(", ")}
시간대별 매출 예시: ${hourlySales[hourlySales.length - 1].join(", ")}
주별 평균 매출: ${weeklyAvg.join(", ")}
위 데이터를 분석하여
1) 매출 흐름
2) 피크 시간대
3) 개선 포인트 및 운영 전략
4) 추천 조치
를 5문장 내로 요약해줘.
`;

    const res = await fetch("/api/ai-analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const result = await res.json();
    aiResult.textContent =
      result.answer || "AI 분석 결과를 불러오지 못했습니다.";
  } catch (err) {
    console.error(err);
    aiResult.textContent = "AI 분석 중 오류 발생";
  }
}

// 페이지 로드 시 AI 분석
fetchAIAnalysis(data.dailySales, data.hourlySales, data.weeklyAvg);
