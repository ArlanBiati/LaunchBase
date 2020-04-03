
const recipes = document.querySelectorAll('.recipe-content')
for (let recipe of recipes) {
  recipe.addEventListener("click", function () {

    const recipeId = recipe.getAttribute('id')
    window.location.href = `/recipe/${recipeId}`

  })
}

function showHide(esconder, change) {
  document.querySelector(esconder).classList.toggle('hide')
  
  if(change.textContent == 'ESCONDER') {
    change.innerHTML = 'MOSTRAR'
  } else {
    change.innerHTML = 'ESCONDER'
  }
}








