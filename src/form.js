
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtns = document.querySelectorAll(".open-modal-btn"); 
  const closeBtn = document.querySelector(".close-btn");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  // закрыть по кнопке
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // закрытие по клику на фон
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Отправка формы в Telegram
 const TOKEN = "8570279102:AAEUqbMkM8ggPv_HzFhj01hB8Lma9xNT8iA";
const CHAT_ID = "-1003480486593";

  document.getElementById("tgForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;

    const message = `
📩 Новая заявка

👤 Имя: ${form.name.value}
📞 Телефон: ${form.phone.value}
💬 Telegram: ${form.telegram.value || "не указан"}
📧 Email: ${form.email.value || "не указан"}
    `;

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown"
      })
    })
    .then(res => {
      if (res.ok) {
        alert("Заявка отправлена!");
        form.reset();
        modal.style.display = "none";
      } else {
        alert("Ошибка отправки");
      }
    })
    .catch(() => alert("Ошибка соединения"));
  });
});