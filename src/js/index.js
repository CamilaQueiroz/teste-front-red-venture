const {
  water1Drop,
  water2Drop,
  water3Drop,
  noSun,
  lowSun,
  highSun,
  toxic,
  pets,
} = require("./importPathOfIcons");

document.querySelectorAll(".radio-input").forEach((select) => {
  select.addEventListener("click", getPlantsAndPutListItemsInList);
});

function getPlantsAndPutListItemsInList() {
  const amountOfSunlightRadioInput = document.querySelector(
    "input[name=amountOfSunlight]:checked"
  );
  const amountOfSunlight = amountOfSunlightRadioInput
    ? amountOfSunlightRadioInput.value
    : "";

  const howOftenForTheWaterRadioInput = document.querySelector(
    "input[name=howOftenForTheWater]:checked"
  );
  const howOftenForTheWater = howOftenForTheWaterRadioInput
    ? howOftenForTheWaterRadioInput.value
    : "";

  const petsChewThePlantsRadioInput = document.querySelector(
    "input[name=petsChewThePlants]:checked"
  );
  const petsChewThePlants = petsChewThePlantsRadioInput
    ? petsChewThePlantsRadioInput.value
    : "";

  const mainList = document.getElementById("mainList");
  const divPlantsResults = document.getElementById("results");
  const divNoResultsFound = document.getElementById("no-results-found");

  if (amountOfSunlight && howOftenForTheWater && petsChewThePlants) {
    fetch(
      `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${amountOfSunlight}&water=${howOftenForTheWater}&pets=${petsChewThePlants}`
    )
      .then((response) => response.json())
      .then((plants) => {
        mainList.innerHTML = "";

        plants.forEach((plant) => {
          divPlantsResults.classList.add("show-div");
          divNoResultsFound.classList.add("hide-div");

          // List Item
          const listItem = document.createElement("li");
          mainList.appendChild(listItem);

          // Label Staff Favorite
          if (plant.staff_favorite) {
            const divStaffFavorite = document.createElement("div");
            divStaffFavorite.className = "favorite";
            const spanStaffFavorite = document.createElement("span");
            spanStaffFavorite.textContent = "✨ Staff favorite";
            divStaffFavorite.appendChild(spanStaffFavorite);

            listItem.appendChild(divStaffFavorite);
          }

          // Div card plant
          const divCardPlant = document.createElement("div");
          divCardPlant.className = "card-plant";
          listItem.appendChild(divCardPlant);

          // Main picture of card
          const pictureContent = document.createElement("picture");
          divCardPlant.appendChild(pictureContent);

          const imageOfPlant = document.createElement("img");
          imageOfPlant.src = plant.url;
          pictureContent.appendChild(imageOfPlant);

          // Card plant footer
          const divCardPlantFooter = document.createElement("div");
          divCardPlantFooter.className = "card-plant-footer";
          divCardPlant.appendChild(divCardPlantFooter);

          // Card plant title
          const divCardPlantTitle = document.createElement("div");
          divCardPlantTitle.className = "card-plant-title";
          divCardPlantFooter.appendChild(divCardPlantTitle);

          // title
          const titleOfPlant = document.createElement("h3");
          titleOfPlant.textContent = plant.name;
          divCardPlantTitle.appendChild(titleOfPlant);

          // Card plant info
          const divCardPlantInfo = document.createElement("div");
          divCardPlantInfo.className = "card-plant-info";
          divCardPlantFooter.appendChild(divCardPlantInfo);

          // Span info price
          const spanInfoPrice = document.createElement("span");
          spanInfoPrice.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(plant.price);
          divCardPlantInfo.appendChild(spanInfoPrice);

          // Icons div
          const divCardPlantIcons = document.createElement("div");
          divCardPlantIcons.className = "card-plant-icons";
          divCardPlantInfo.appendChild(divCardPlantIcons);

          const iconForPet = document.createElement("img");
          iconForPet.src = plant.toxicity ? toxic : pets;
          divCardPlantIcons.appendChild(iconForPet);

          const iconForSun = document.createElement("img");
          switch (plant.sun) {
            case "low":
              iconForSun.src = lowSun;
              break;
            case "no":
              iconForSun.src = noSun;
              break;

            case "high":
              iconForSun.src = highSun;
              break;

            default:
              break;
          }
          divCardPlantIcons.appendChild(iconForSun);

          const iconForWater = document.createElement("img");
          switch (plant.water) {
            case "rarely":
              iconForWater.src = water1Drop;
              break;

            case "daily":
              iconForWater.src = water2Drop;
              break;

            case "regularly":
              iconForWater.src = water3Drop;
              break;

            default:
              break;
          }
          divCardPlantIcons.appendChild(iconForWater);

          mainList.scrollIntoView({ behavior: "smooth" });
        });
      })
      .catch((err) => {
        divPlantsResults.classList.remove("show-div");
        divNoResultsFound.classList.remove("hide-div");
      });
  }
}
