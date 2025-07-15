const form = document.getElementById("registerForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  const fields = [
    { id: "username", message: "Введите имя" },
    { id: "email", message: "Введите корректный email" },
    { id: "password", message: "Введите пароль" },
    { id: "confirmPassword", message: "Повторите пароль" }
  ];

  // Очистка ошибок
  fields.forEach(({ id }) => {
    const inputBox = document.getElementById(id).parentElement;
    inputBox.classList.remove("shake");
    inputBox.querySelector(".error").textContent = "";
  });

  // Валидация полей
  fields.forEach(({ id, message }) => {
    const input = document.getElementById(id);
    const inputBox = input.parentElement;
    if (!input.value.trim()) {
      inputBox.classList.add("shake");
      inputBox.querySelector(".error").textContent = message;
      hasError = true;
    }
  });

  // Проверка совпадения паролей
  const pass = document.getElementById("password");
  const confirm = document.getElementById("confirmPassword");
  if (pass.value && confirm.value && pass.value !== confirm.value) {
    const inputBox = confirm.parentElement;
    inputBox.classList.add("shake");
    inputBox.querySelector(".error").textContent = "Пароли не совпадают";
    hasError = true;
  }

  if (!hasError) {
    showModal();
    form.reset();
  }
});

function showModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
function showModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}