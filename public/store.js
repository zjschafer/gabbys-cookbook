"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Save button functionality
  const container = document.querySelector("article"); // article

  const saveButton = document.getElementById("save-button");

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      const recipePath = container.dataset.pathname; // Get the recipe path from data attribute
      const recipeTitle = document.querySelector(
        "#recipe-introduction h1"
      ).textContent;
      const recipeSubtitle = document.querySelector(
        "#recipe-introduction .subtitle"
      ).textContent;
      const recipeImageSrc = document
        .querySelector("#recipe-introduction figure img")
        .getAttribute("src");
      const recipeImageAlt = document
        .querySelector("#recipe-introduction figure img")
        .getAttribute("alt");

      // Create recipe object
      const recipe = {
        id: Date.now(),
        title: recipeTitle,
        subtitle: recipeSubtitle,
        imageSrc: recipeImageSrc,
        imageAlt: recipeImageAlt,
        path: recipePath,
      };

      // Save and retrieve recipes to the savedRecipes array in user's browser local storage
      let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
      savedRecipes.push(recipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));

      alert("Recipe saved!");
    });
  }

  // NEW
  // New code to display saved recipes on the saved recipes page
  // Load saved recipes functionality
  const savedRecipesContainer = document.getElementById("recipe-cards");

  if (savedRecipesContainer) {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    if (savedRecipes.length === 0) {
      savedRecipesContainer.innerHTML =
        "<p>No saved recipes. Go back and save some!</p>";
    } else {
      savedRecipes.forEach((recipe) => {
        const recipeCard = document.createElement("article");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
          <a href=${recipe.path} class="recipe-card-link">
        <div class="recipe-card-outer">
          <img src=${recipe.imageSrc} alt=${recipe.imageAlt} class="recipe-image"/>
          <div class="recipe-card-inner">
                  <span class="recipe-subtitle">${recipe.subtitle}</span>
                  <h1 class="recipe-title">${recipe.title}</h1>
          </div>
        </div>
      </a>
        `;

        savedRecipesContainer.appendChild(recipeCard);
      });
    }
  }
});
