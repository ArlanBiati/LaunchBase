const recipes = document.querySelectorAll('.recipe-content')

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {

    const recipeIndex = recipe.getAttribute('id')
    window.location.href = `/recipe/${recipe[recipeIndex]}`

    console.log(recipeIndex)
  })
}

const hide = document.querySelector('.hide')

