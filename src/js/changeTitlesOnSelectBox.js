document.querySelectorAll(".radio-input").forEach((select) => {
  select.addEventListener("click", changeTitleOnSelectBox);
});

function changeTitleOnSelectBox() {
  const amountOfSunlight = document.querySelector(
    "input[name=amountOfSunlight]:checked"
  );

  if (amountOfSunlight) {
    document.querySelector("#amountOfSunlight").textContent =
      amountOfSunlight.nextElementSibling.textContent;
  }

  const howOftenForTheWater = document.querySelector(
    "input[name=howOftenForTheWater]:checked"
  );

  if (howOftenForTheWater) {
    document.querySelector("#howOftenForTheWater").textContent =
      howOftenForTheWater.nextElementSibling.textContent;
  }

  const petsChewThePlants = document.querySelector(
    "input[name=petsChewThePlants]:checked"
  );

  if (petsChewThePlants) {
    document.querySelector("#petsChewThePlants").textContent =
      petsChewThePlants.nextElementSibling.textContent;
  }
}
