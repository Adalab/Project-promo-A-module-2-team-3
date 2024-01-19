console.log('preview-palletes');

const previewCard = document.querySelector('.js__previewcard');

const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');


palette1.addEventListener('input', (event) => {
    data.palette = 1;

<<<<<<< HEAD
    previewCard.classList.remove('palette2', 'palette3')
=======
    previewCard.classList.remove('palette1' , 'palette2' , 'palette3')
>>>>>>> 0b9c111ac1f9b34de80d4d49699b225a062cdf3d

    previewCard.classList.add('palette1')
});

palette2.addEventListener('input', (event) => {
    data.palette = 2;

<<<<<<< HEAD
    previewCard.classList.remove('palette1', 'palette3')
=======
    previewCard.classList.remove('palette1' , 'palette2' , 'palette3')
>>>>>>> 0b9c111ac1f9b34de80d4d49699b225a062cdf3d

    previewCard.classList.add('palette2')
});

palette3.addEventListener('input', (event) => {
    data.palette = 3;

<<<<<<< HEAD
    previewCard.classList.remove('palette1', 'palette2')
=======
    previewCard.classList.remove('palette1' , 'palette2' , 'palette3')
>>>>>>> 0b9c111ac1f9b34de80d4d49699b225a062cdf3d

    previewCard.classList.add('palette3')
});