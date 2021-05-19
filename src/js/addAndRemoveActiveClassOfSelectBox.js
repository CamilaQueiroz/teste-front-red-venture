const selectedItems = Array.from(document.querySelectorAll(".selected"));
const optionsContainer = Array.from(
  document.querySelectorAll(".options-container")
);

document.querySelectorAll(".selected").forEach((selected) => {
  selected.addEventListener("click", toggleActiveClassOnSelectBox);
});
function toggleActiveClassOnSelectBox(e) {
  const targetElement = e.target;
  const nextElement = targetElement.nextElementSibling;

  selectedItems.forEach((el) => {
    el.classList.contains("active") &&
      el !== targetElement &&
      el.classList.remove("active");
  });

  optionsContainer.forEach((el) => {
    el.classList.contains("active") &&
      el !== nextElement &&
      el.classList.remove("active");
  });

  targetElement.classList.toggle("active");
  nextElement.classList.toggle("active");
}

document.querySelectorAll(".radio-input").forEach((input) => {
  input.addEventListener("click", toggleActiveClassOnSelectBoxWhenSelectOption);
});

function toggleActiveClassOnSelectBoxWhenSelectOption() {
  selectedItems.forEach((el) => {
    el.classList.remove("active");
  });

  optionsContainer.forEach((el) => {
    el.classList.remove("active");
  });
}
