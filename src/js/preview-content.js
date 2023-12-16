'use strict'; 

console.log('preview-content');
//variables para el desplejable de crear tarjeta
const createButton = document.querySelector('.js__createButton');
const shareButtom = document.querySelector('.js_createCard');

//creo el boton - funcion

function togglecreateCard () {

    shareButtom.classList.toggle('hidden');
};

function handelCllickButtom (event) {
    event.preventDefault();

    createButton.classList.toggle('click');
    togglecreateCard();
};


createButton.addEventListener( 'click' , handelCllickButtom);


//variables para el cambio de color del botón
const shareCard = document.querySelector('.js__btnColor');


shareCard.addEventListener( 'click' , (event) => {
    event.preventDefault();

    shareCard.classList.remove( 'share-container__button--styles' );
    shareCard.classList.add('share-container__button--styles--grey');
});
