console.log('preview-content');

const createButton = document.querySelector('.js__createButton');

const noClickedButton = document.querySelector('.share-container__button--styles');
const clickedButton = document.querySelector('.share-container__button--styles--grey');

const createCard = document.querySelector('.js_createCard');


//para cambiar el color del boton
clickedButton.addEventListener('clicked' , (event) => {
    // event.preventDefault();

    createCard.classList.remove('share-container__button--styles--grey' , 'share-container__button--styles');
    previewCard.classList.add('share-container__button--styles--grey');
});

noClickedButton.addEventListener( 'click' , (event) => {
    // event.preventDefault();

    createCard.classList.remove('share-container__button--styles--grey' , 'share-container__button--styles');
    previewCard.classList.add('share-container__button--styles');
});

//para que se extienda el mensaje "La tarjeta ha sido creada"
function togglecreateCard() {
    createCard.classList.toggle('hidden');
    console.log('funciona')
};

createButton.addEventListener( 'click' , (event) => {
    event.preventDefault();
    createButton.classList.toggle('clicked');
    togglecreateCard
 console.log('funciona')
});
