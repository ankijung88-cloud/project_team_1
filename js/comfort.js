<script>
  document.addEventListener("DOMContentLoaded", () => {
    // 🔹 예시 매출 데이터 (실서비스에서는 API 값으로 교체)
    const todaySales = 280000;

    const comfortMessageEl = document.getElementById("comfortMessage");
    if (!comfortMessageEl) return;

    function getComfortMessage(sales) {
      if (sales <= 200000) {
        return "오늘은 조금 버거운 하루였을지도 몰라요. 그래도 가게 문을 열고 하루를 버텨낸 것만으로 충분히 잘 해내셨어요.";
      }

      if (sales <= 500000) {
        return "아주 큰 날은 아니었지만, 분명 의미 있는 하루였습니다. 이 꾸준함이 내일을 만들어 갑니다.";
      }

      return "정말 수고 많으셨어요. 오늘의 매출은 사장님의 노력이 만든 결과입니다. 스스로를 꼭 칭찬해주세요.";
    }

    comfortMessageEl.textContent = getComfortMessage(todaySales);
  });
</script>
