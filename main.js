{/* <script>
  // Получаем элементы
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("contactBtn");
  const span = document.getElementsByClassName("close")[0];

  // Открыть модальное окно
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // Закрыть при клике на (X)
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Закрыть при клике вне окна
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  // Обработка отправки формы
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Форма отправлена!");
    modal.style.display = "none";
    // Здесь можно добавить отправку данных на сервер
  });
</script> */}