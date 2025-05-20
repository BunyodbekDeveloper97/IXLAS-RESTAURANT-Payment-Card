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
  