function loadRecipes() {
  fetch("/api/recipes")
    .then(response => response.json())
    .then(data => {
      let output = "";
      data.forEach(recipe => {
        output += `
          <div>
            <h3>${recipe.name}</h3>
            <p><b>Ingredients:</b> ${recipe.ingredients}</p>
          </div>
        `;
      });
      document.getElementById("recipeList").innerHTML = output;
    });
}