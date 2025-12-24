const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");
const downloadBtn = document.getElementById("downloadBtn");

let chatHistory = [];

// 실제 OpenAI API 호출
async function fetchAIResponse(question) {
  if (!question) return "질문을 입력해주세요.";
  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: question }),
    });
    const data = await response.json();
    return data.answer || "AI가 답변을 제공하지 못했습니다.";
  } catch (error) {
    console.error(error);
    return "AI 상담 요청 중 오류가 발생했습니다.";
  }
}

// 메시지 추가
function addMessage(msg, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${
    sender === "user" ? "user-msg" : "ai-msg"
  }`;
  msgDiv.textContent = msg;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  chatHistory.push({ sender, message: msg });
}

// 전송 이벤트
sendBtn.addEventListener("click", async () => {
  const question = userInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  userInput.value = "";
  addMessage("AI가 분석 중입니다...", "ai");

  const aiAnswer = await fetchAIResponse(question);

  // 마지막 AI 메시지 업데이트
  const aiMsgs = chatWindow.querySelectorAll(".ai-msg");
  aiMsgs[aiMsgs.length - 1].textContent = aiAnswer;
});

// 상담 기록 다운로드
downloadBtn.addEventListener("click", () => {
  const text = chatHistory
    .map((item) => `${item.sender.toUpperCase()}: ${item.message}`)
    .join("\n");
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "chat_history.txt";
  a.click();
  URL.revokeObjectURL(url);
});
