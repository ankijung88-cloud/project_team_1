// weather.js

// 서울 좌표 (원하면 위치 변경 가능)
const LAT = 37.5665;
const LON = 126.978;

const weatherEl = document.querySelector("#weather-card .weather-info");

fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`
)
  .then((res) => res.json())
  .then((data) => {
    const weather = data.current_weather;

    const temp = weather.temperature;
    const wind = weather.windspeed;
    const code = weather.weathercode;

    weatherEl.innerHTML = `
      <strong>현재 날씨</strong><br />
      🌡 기온: ${temp}℃<br />
      🌬 풍속: ${wind}km/h<br />
      ☁ 상태 코드: ${code}
    `;
  })
  .catch(() => {
    weatherEl.textContent = "날씨 정보를 불러오지 못했습니다.";
  });
