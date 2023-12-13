'use strict'; 

console.log('preview-content');

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














// //para cambiar el color del boton
// clickedButton.addEventListener( 'click' , (event) => {
//     event.preventDefault();

//     createCard.classList.remove('js_shareGrey' , 'js_shareOrange');
//     previewCard.classList.add('js_shareOrange');
//     // console.log('funciona');
// });

// // noClickedButton.addEventListener( 'click' , (event) => {
// //     event.preventDefault();

// //     createCard.classList.remove('js_shareGrey' , 'js_shareOrange');
// //     previewCard.classList.add('js_shareGrey');
// //     console.log('funciona');
// // });
