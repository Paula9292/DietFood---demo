function toggle(exitEL){ 
    exitEL.classList.toggle('add-remove-class')
}

function remove(exitEL){ 
    exitEL.classList.remove('add-remove-class')
}


const userIcon= document.querySelector('.fa-user-circle');
const platform=document.querySelector('.profile'); 

function addRemove(e){

    let targetElement = e.target

    if (targetElement == userIcon){
        toggle(platform)
    }else if (targetElement !== userIcon){
        remove(platform)
}}


window.addEventListener('click', addRemove);

const showBurger= document.querySelector('.fa-bars');
const burgerMenu=document.querySelector('.mobile-box');

function showBurgerMenu(e){

    let targetElement = e.target

    if (targetElement == showBurger){
        toggle(burgerMenu)
    }else if (targetElement !== showBurger){
        remove(burgerMenu)
}}

window.addEventListener('click', showBurgerMenu);

window.addEventListener('resize', () => {remove(burgerMenu)});

window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}