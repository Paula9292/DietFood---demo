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


const userName = document.querySelector('.name');
const secondName= document.querySelector('.username');
const email = document.querySelector('.email');
const birth= document.querySelector('.birth');

const password = document.getElementById('password1')
const password1 = document.getElementById('password2');
const password2= document.querySelector('.password3');




function cilckField(e){


[userName, secondName, email, birth, password, password1, password2].forEach(el => {

let targetElement = e.target;

    if (targetElement == el)
    el.classList.add('clickText')
})

}

window.addEventListener('click', cilckField )

const btn1= document.querySelector('.btn1');
const btn2= document.querySelector('.btn2');


function addClick(e){
    e.classList.add('clickButton')
}
function removeClick(e){
    e.classList.remove('clickButton')
}

btn1.addEventListener('mousedown', function(){ addClick(btn1)});

btn1.addEventListener('mouseup', function(){ removeClick(btn1)});

btn2.addEventListener('mousedown', function(){ addClick(btn2)});

btn2.addEventListener('mouseup', function(){ removeClick(btn2)});


window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}