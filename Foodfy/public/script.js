const recipes = document.querySelectorAll('.recipe-content')

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {

    const recipeId = recipe.getAttribute('id')
    window.location.href = `/recipe/${recipeId}`

  })
}