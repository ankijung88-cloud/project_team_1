const buttons = document.querySelectorAll(".mood-btn");
const feedback = document.getElementById("feedback");
const content = document.getElementById("feedbackContent");

const messages = {
  good: `
    <p>오늘도 긍정적인 에너지로 가득하시네요! 좋은 기운이 고객들에게도 전달되었을 거예요.</p>
    <div class="feedback-box">
      <strong>💡 추천 활동</strong>
      <ul>
        <li>• 좋아하는 음악 듣기</li>
        <li>• 직원들과 성공 이야기 나누기</li>
        <li>• 이번 주 목표 재점검</li>
      </ul>
    </div>
  `,
  normal: `
    <p>큰 문제 없이 운영하신 것만으로도 충분히 잘하고 계세요.</p>
    <div class="feedback-box">
      <strong>💡 추천 활동</strong>
      <ul>
        <li>• 오늘의 작은 성취 3가지 떠올리기</li>
        <li>• 가벼운 스트레칭</li>
        <li>• 내일 개선할 점 1가지</li>
      </ul>
    </div>
  `,
  tired: `
    <p>오늘 많이 바쁘셨군요. 오늘은 충분한 휴식을 권장드려요.</p>
    <div class="feedback-box">
      <strong>💡 추천 활동</strong>
      <ul>
        <li>• 따뜻한 차 한 잔</li>
        <li>• 내일 알바 추가 고려</li>
        <li>• 족욕 또는 반신욕</li>
      </ul>
    </div>
  `,
  exhausted: `
    <p>정말 수고 많으셨어요. 괜찮습니다. 힘든 날도 있는 거예요.</p>
    <div class="feedback-box">
      <strong>⚠️ 긴급 추천</strong>
      <ul>
        <li>• 하루 휴무 고려</li>
        <li>• 가족·지인과 대화</li>
        <li>• 전문가 상담</li>
      </ul>
    </div>
    <div class="warning">
      ⚠️ 번아웃 위험 신호가 감지되었습니다. 전문가의 도움을 권장드립니다.
    </div>
  `,
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const mood = btn.dataset.mood;
    content.innerHTML = messages[mood];
    feedback.classList.remove("hidden");
  });
});
