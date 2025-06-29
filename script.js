// Copy Account Number
function copyAccountNumber() {
  const accountNumber = document.getElementById("accountNumber").innerText;
  const copyBtn = document.getElementById("copyBtn");

  navigator.clipboard.writeText(accountNumber).then(() => {
    copyBtn.textContent = "Copied ✔️";
    copyBtn.style.backgroundColor = "#43a047";

    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.style.backgroundColor = "#1e88e5";
    }, 2000);
  }).catch(() => {
    alert("Nusxalab bo‘lmadi. Qaytadan urinib ko‘ring.");
  });
}

// Open Address in Map
function openMap() {
  const address = "경기 수원시 영통구 매탄동 101-30";
  const kakaoMapURL = `https://map.kakao.com/?q=${encodeURIComponent(address)}`;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Try native Kakao app
    window.location.href = `kakaomap://search?q=${encodeURIComponent(address)}`;
    setTimeout(() => {
      window.location.href = kakaoMapURL;
    }, 2000);
  } else {
    window.open(kakaoMapURL, "_blank");
  }
}

// Add event listener for Copy button
document.getElementById("copyBtn").addEventListener("click", copyAccountNumber);
