const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
  recipe.addEventListener("click", function () { 

    const informationRecipe = document.querySelector('.modal-content')
    informationRecipe.innerHTML = recipe.innerHTML

    modalOverlay.classList.add('active')
  })
}


document.querySelector(".close-modal").addEventListener("click", function () {

  modalOverlay.classList.remove('active')
})