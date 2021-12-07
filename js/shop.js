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


// click diet option

const clickOption = document.querySelectorAll('.choice-diet li')

function BgChange (e) {
    clickOption.forEach(el => {

    let targetElement = e.target;
    
        if (targetElement == el){
            el.classList.toggle('toggleColors')
        }else if (targetElement !== el){
            el.classList.remove('toggleColors')
        }
        
    })
}

window.addEventListener('click', BgChange );

// 

const mouseButton = document.querySelectorAll('.set div button');


function sizeChangeBtn (e) {
       mouseButton.forEach(el => {

    let targetElement = e.target;
    
        if (targetElement == el){
            el.classList.add('button-scale')
        }else if (targetElement !== el){
            el.classList.remove('button-scale')
        }
        
    })
}

window.addEventListener('mouseover', sizeChangeBtn );


const opinionPic=document.querySelectorAll('.border')


const picOne = document.querySelector('.br-one');
const picTwo = document.querySelector('.br-two');
const picThree = document.querySelector('.br-three');
const next= document.querySelector('.fa-angle-right');



let number = 0;
nextOpinion();

function nextOpinion(){
    let i;
    let x = opinionPic;
    for(i =0; i< x.length; i++){
        x[i].style.display="none"
    }

    number++;
    if(number > x.length){
        number = 1
    }

    x[number - 1].style.display="flex"
    setTimeout(nextOpinion, 3000)

}
 



ScrollReveal().reveal('.photo-food', { delay: 300,  reset: true });
ScrollReveal().reveal('.set', { delay: 500,  reset: true });
ScrollReveal().reveal('h1', { delay: 400,  reset: true });
ScrollReveal().reveal('.why-diet', { delay: 400,  reset: true });
ScrollReveal().reveal('.user-opinion', { delay: 400,  reset: true });
ScrollReveal().reveal('.opinion', { delay: 500,  reset: true });

window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}