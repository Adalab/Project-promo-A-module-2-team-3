"use strict";

const collapsibleBtn = document.querySelectorAll(".js-collapsible--btn");

for (const item of collapsibleBtn) {
    item.addEventListener("click", updateCollapsible);
}
function updateCollapsible(ev) {
    const currentCollapsible = ev.currentTarget;

    // Cierra todos los fieldset
    const allFieldSets = document.querySelectorAll('.collapsible__fieldset');
    for( const eachFieldSet of allFieldSets ) {
        eachFieldSet.classList.remove('collapsible__colours--show');
        eachFieldSet.classList.add('collapsible__colours--hide');
    }

    //currentCollapsible.closest('fieldset')

    currentCollapsible.parentElement.classList.add('collapsible__colours--show');

/*
    if(currentCollapsible.children[2].classList.contains('fa-chevron-up')){
        currentCollapsible.children[2].classList.remove('fa-chevron-up');
        currentCollapsible.children[2].classList.add('fa-chevron-down');
        currentCollapsible.nextElementSibling.classList.remove('collapsible__colours--hide');
        currentCollapsible.nextElementSibling.classList.add('collapsible__colours--show');
    }
    else{
        currentCollapsible.children[2].classList.remove('fa-chevron-down');
        currentCollapsible.children[2].classList.add('fa-chevron-up');
        currentCollapsible.nextElementSibling.classList.remove('collapsible__colours--show');
        currentCollapsible.nextElementSibling.classList.add('collapsible__colours--hide');
    }
    */
}
/*const collapsibleFill = document.querySelectorAll(".js-collapsible--fill");

for (const item of collapsibleFill) {
    item.addEventListener("click", updateCollapsible);
}
function updateCollapsible(ev) {
    const currentCollapsible = ev.currentTarget;
    if(currentCollapsible.children[1].classList.contains('fa-chevron-up')){
        currentCollapsible.children[1].classList.remove('fa-chevron-up');
        currentCollapsible.children[1].classList.add('fa-chevron-down');
        currentCollapsible.nextElementSibling.classList.remove('collapsible__colours--hide');
        currentCollapsible.nextElementSibling.classList.add('collapsible__colours--show');
    }
    else{
        currentCollapsible.children[1].classList.remove('fa-chevron-down');
        currentCollapsible.children[1].classList.add('fa-chevron-up');
        currentCollapsible.nextElementSibling.classList.remove('collapsible__colours--show');
        currentCollapsible.nextElementSibling.classList.add('collapsible__colours--hide');
    }
}*/