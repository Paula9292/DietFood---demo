function toggle(exitEL){ 
    exitEL.classList.toggle('add-remove-class')
}

function remove(exitEL){ 
    exitEL.classList.remove('add-remove-class')
}

// user menu show/hide
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


// show activ info

const showActiveInfo=document.querySelector('.round ');
const activeInfo = document.querySelector('.info');

showActiveInfo.addEventListener('click', () => {activeInfo.classList.add('add-rem-class')}
);




const exitCross=document.querySelector('.fa-times-circle');

exitCross.addEventListener('click', () => {activeInfo.classList.remove('add-rem-class');});

const inputs=document.querySelectorAll('input');

function cilckField(e){


    inputs.forEach(el => {
    
    let targetElement = e.target;
    
        if (targetElement == el)
        el.classList.add('clickText')
    })
    
    }
window.addEventListener('click', cilckField )
    
const buttonSafe=document.querySelector('.safe');

buttonSafe.addEventListener('click', (e) => {e.preventDefault();});

window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}