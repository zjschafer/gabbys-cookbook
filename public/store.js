"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Function to load saved recipes from localStorage
  function loadSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    savedRecipes.forEach((recipe) => {
      const recipeElement = document.createElement("article");
      recipeElement.classList.add("recipe-card");
      recipeElement.innerHTML = `
      <a href=${recipe.url} class="recipe-card-link">
        <div class="recipe-card-outer">
          <img src=${recipe.image} alt=${recipe.alt} class="recipe-card-image"/>
          <div class="recipe-card-inner">
                  <span class="recipe-subtitle">${recipe.subtitle}</span>
                  <h1 class="recipe-title">${recipe.title}</h1>
          </div>
        </div>
      </a>
      `;

      savedRecipesContainer.appendChild(recipeElement);
    });
  }

  // Load saved recipes on page load
  loadSavedRecipes();

  const saveButton = document.getElementById("save-button");
  const savedRecipesContainer = document.getElementById("recipe-cards");

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      alert("Recipe saved!"); // works
      const recipePath = window.location.pathname;
      console.log("Current URL:", recipePath);
      const recipeTitle = document.querySelector(
        "#recipe-introduction h1"
      ).textContent;
      const recipeSubtitle = document.querySelector(
        "#recipe-introduction .subtitle"
      ).textContent;
      const recipeImageSrc = document.querySelector(
        "#recipe-introduction img"
      ).src;
      const recipeImageAlt = document.querySelector(
        "#recipe-introduction img"
      ).alt;
      console.log("Recipe title:", recipeTitle);
      console.log("Recipe subtitle:", recipeSubtitle);
      console.log("Recipe image src:", recipeImageSrc);
      console.log("Recipe image alt:", recipeImageAlt);
      console.log("Recipe path:", recipePath);
      // Create recipe object
      const recipe = {
        image: recipeImageSrc,
        alt: recipeImageAlt,
        url: recipePath,
        title: recipeTitle,
        subtitle: recipeSubtitle,
      };
      let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
      savedRecipes.push(recipe);
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
      loadSavedRecipes();
    });
  }
});
