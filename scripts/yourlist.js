/* Initialization */
const openPopup = document.getElementById("button");
const newRecipe = document.getElementById("new-recipe-input");
const newIngredients = document.getElementById("new-recipe-ingredients");
const listContainer = document.getElementById("list-container");

/* Opening Popup */
openPopup.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
});

/* Closing Popup */
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

/* Adding new Recipe to the list */
function addTask() {
  if (newRecipe.value === "") {
    alert("Input is missing!"); // alert if nothing typed in
  } else {
    let dt = document.createElement("dt"); // new dt element is created
    dt.innerHTML = newRecipe.value; // input is stored in variable
    listContainer.appendChild(dt); // input gets put out in list-container

    let originalIngredients = newIngredients.value; // Store the original ingredients
    let ingredients = newIngredients.value.split("\n");
    ingredients.forEach(ingredient => {
      let dd = document.createElement("dd");
      dd.textContent = ingredient.trim(); // Trim the ingredient to remove leading/trailing spaces
      listContainer.appendChild(dd);
    });

    let span = document.createElement("span"); // span element is created
    span.innerHTML = "\u00d7"; // "x"-Icon is stored in variable
    dt.appendChild(span); // "x"-Icon gets added next to created Recipe
  }
  newRecipe.value = ""; // input-box is empty after adding
  newIngredients.value = ""; // input-box is empty after adding
  saveData();
  document.querySelector(".popup").style.display = "none"; // popup closes after adding
}

/* Removing Recipe from list */
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    let dt = e.target.parentElement;
    let dd = dt.nextElementSibling;
    
    // Entferne alle zugehörigen <dd> -Elemente
    while (dd && dd.tagName === "DD") {
      dd.remove();
      dd = dt.nextElementSibling;
    }
    
    dt.remove();
    saveData();
  }
});

/* Created Recipes are still shown after Page refresh */
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showRecipe() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showRecipe();
