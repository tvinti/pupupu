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

// Анимация
// services-animation.js

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Добавляем небольшую задержку для поочерёдного появления
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // 150ms между карточками
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});
  