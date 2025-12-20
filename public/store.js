"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Save button functionality
  const saveButton = document.getElementById("save-button");

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      const recipePath = window.location.pathname;

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
      // console.log("Recipe title:", recipeTitle);
      // console.log("Recipe subtitle:", recipeSubtitle);
      // console.log("Recipe image src:", recipeImageSrc);
      // console.log("Recipe image alt:", recipeImageAlt);
      // console.log("Recipe path:", recipePath);

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
});
