const posts = [
  {
    title: "비 오는 날 재고 관리 어떻게 하세요?",
    comments: 15,
    time: "2시간 전",
  },
  {
    title: "매출 부진할 때 극복하는 나만의 방법",
    comments: 23,
    time: "5시간 전",
  },
  {
    title: "오늘 장사 대박 났어요! 감사합니다",
    comments: 47,
    time: "1일 전",
    highlight: true,
  },
];

const postList = document.getElementById("post-list");

posts.forEach((post) => {
  const postDiv = document.createElement("div");
  postDiv.className = "post" + (post.highlight ? " highlight" : "");
  postDiv.innerHTML = `
    <div class="post-title">
      <p>${post.title}</p>
      <span class="post-time">${post.time}</span>
    </div>
    <div class="post-comments">
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9a9 9 0 01-9-9c0-4.97 4.03-9 9-9s9 4.03 9 9z"/>
      </svg>
      <span>${post.comments}개의 댓글</span>
    </div>
  `;
  postList.appendChild(postDiv);
});
