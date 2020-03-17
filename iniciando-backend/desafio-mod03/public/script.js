const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

for (let card of cards) {
  card.addEventListener("click", function () {

    const videoId = card.getAttribute('id')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`
    
    modalOverlay.classList.add('active')
    modal.classList.remove('active')

  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener('click', function () {
  modal.classList.add('active')
})