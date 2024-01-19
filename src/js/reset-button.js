console.log('reset-button');

const resetButton = document.querySelector('.js_resetBtn');
const formReset =  document.querySelector('.js_formReset')


const resetCard = () => {

    formReset.reset();
    nameInput.innerHTML = 'Nombre Apellido';
    jobInput.innerHTML = 'Front-end developer';
    phoneInput.href = '';
    emailInput.href = '';
    linkedinInput.href = '';
    githubInput.href = '';
}

const handleClickReset = (event) => {
    event.preventDefault ();
    resetCard ();
 }
 
 //Eventos
 resetButton.addEventListener('click', handleClickReset);
