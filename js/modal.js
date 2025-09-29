// Открытие/закрытие модального окна
const modalOpenBtn = document.querySelector("[data-modal-open]");
const modalCloseBtn = document.querySelector(".close-button");
const modalContainer = document.querySelector(".modal-container");

function toggleModal() {
  modalContainer.classList.toggle("is-open"); // ← ИЗМЕНИЛОСЬ ЗДЕСЬ
  document.body.classList.toggle("no-scroll");
}

modalOpenBtn.addEventListener("click", toggleModal);
modalCloseBtn.addEventListener("click", toggleModal);

// Закрытие модального окна при клике вне его области
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    toggleModal();
  }
});

// Закрытие модального окна при нажатии клавиши Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("is-open")) {
    // ← И ЗДЕСЬ
    toggleModal();
  }
});

// Обработка отправки формы
const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Здесь можно добавить логику отправки данных формы
  toggleModal();
});

// Валидация формы
const formInputs = document.querySelectorAll(".form-input, .form-textarea");
formInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value.trim() !== "") {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  });
});

// Добавление стиля для body при открытии модального окна
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    body.no-scroll {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
});
