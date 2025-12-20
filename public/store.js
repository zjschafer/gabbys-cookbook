"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save-button");
  const savedRecipesContainer = document.getElementById("recipe-cards");

  // Function to load saved recipes from localStorage
  function loadSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    // savedRecipesContainer.innerHTML = "";

    // if (savedRecipes.length === 0) {
    //   savedRecipesContainer.innerHTML = "<p>No saved recipes yet.</p>";
    //   return;
    // }
    savedRecipes.forEach((recipe) => {
      const recipeElement = document.createElement("article");
      recipeElement.classList.add("recipe-card");
      recipeElement.innerHTML = `
      <a href=${recipe.url} class="recipe-card-link">
        <div class="recipe-card-outer">
          <img src=${recipe.image} alt=${recipe.alt} class="recipe-card-image"/>
          <div class="recipe-card-inner">
                  <span class="subtitle">${recipe.subtitle}</span>
                  <h1>${recipe.title}</h1>
          </div>
        </div>
      </a>
      `;

      savedRecipesContainer.appendChild(recipeElement);
    });
  }

  console.log(savedRecipesContainer);

  // Load saved recipes on page load
  loadSavedRecipes();

  // Event listener for save button
  if (saveButton) {
    saveButton.addEventListener("click", function () {
      const recipe = {
        // title: "Sample Recipe",
        // subtitle: "Sample Subtitle",
        // image: "sample-image.jpg",
        // alt: "Sample Image",
        // url: "#",
      };
      let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
      savedRecipes.push(recipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      loadSavedRecipes();
    });
  }
});
