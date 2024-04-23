const buttonContainer = document
document.querySelector('.card-container');

  buttonContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('goTo')){
        const hash = event.target.dataset.hash;
        window.location.hash = hash; 
    }
  })