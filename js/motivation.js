let userIcon;
let platform;
let showBurger;
let burgerMenu;
let addThingBtn;
let addThingArea;
let ulList;
let popup;
let changeField;
let okBtn;
let cancelBtn;
let infoMotivation;
let showInfo;
let infoExit;
let edit;

function main () {
    prepareDOMElements ();
    prepareDOMEvents ();
}

function prepareDOMElements () {
    userIcon= document.querySelector('.fa-user-circle');
    platform=document.querySelector('.profile');
    showBurger= document.querySelector('.fa-bars');
    burgerMenu=document.querySelector('.mobile-box'); 
    addThingBtn =document.querySelector('.add-thing button');
    addThingArea= document.querySelector('.add-thing input');
    ulList=document.querySelector('.thing-to-do ul');
    popup=document.querySelector('.changeField');
    changeField=document.querySelector('.changeField input');
    okBtn = document.querySelector('.ok');
    cancelBtn = document.querySelector('.cancel');
    infoMotivation = document.querySelector('.info-motivation-box');
    showInfo = document.querySelector('.round');
    infoExit=document.querySelector('.info-exit');
}

function prepareDOMEvents () {
    
window.addEventListener('click', addRemove);
window.addEventListener('click', showBurgerMenu);
window.addEventListener('resize', () => {remove(burgerMenu)});
addThingBtn.addEventListener('click',addNewTask);
window.addEventListener('keyup', enterKey);
ulList.addEventListener('click', iconClick);
okBtn.addEventListener('click', okChange);
cancelBtn.addEventListener('click',() => {popup.style.display="none";popup.style.visibility="hidden"});
infoExit.addEventListener('click', ()=>{ infoMotivation.style.display="none"});
showInfo.addEventListener('click', ()=>{ infoMotivation.style.display="block"});
}



function toggle(exitEL){ 
    exitEL.classList.toggle('add-remove-class')
}

function remove(exitEL){ 
    exitEL.classList.remove('add-remove-class')
}

// user menu show/hide

function addRemove(e){

    let targetElement = e.target

    if (targetElement == userIcon){
        toggle(platform)
    }else if (targetElement !== userIcon){
        remove(platform)
}}


function showBurgerMenu(e){

    let targetElement = e.target

    if (targetElement == showBurger){
        toggle(burgerMenu)
    }else if (targetElement !== showBurger){
        remove(burgerMenu)
}}


//motivation list 

function addNewTask () {
     if ( addThingArea.value !== ''){
         
         const motivation = document.createElement('li');
         ulList.appendChild(motivation);
         motivation.innerText= addThingArea.value;

         const divIcons=document.createElement('div');
         motivation.appendChild(divIcons);

         const icon1=document.createElement('i');
         divIcons.appendChild(icon1);
         icon1.innerHTML='<i class="fas fa-edit"></i>'

         const icon=document.createElement('i');
         divIcons.appendChild(icon);
         icon.innerHTML='<i class="fas fa-times"></i>'
         icon.style.color='#b01e1e'

         addThingArea.value =''
     }
}


// enter - add New Motivation



function enterKey(e){
    if(e.key==='Enter'){
        
        let targetElement = e.target

        if (targetElement == addThingArea){
            addNewTask();
        }else if (targetElement == changeField ){
            okChange();
    }}
    }



function iconClick(e){
    if(e.target.matches('.fa-times')){
        e.target.closest('li').remove();
    }else if (e.target.matches('.fa-edit')){
        edit = e.target.closest('li');
        popup.style.display="flex"; 
        popup.style.visibility="visible"
        changeField.value= edit.firstChild.textContent;

    }
}

function okChange () {
    if (changeField.value !== ''){
        edit.firstChild.textContent = changeField.value ; popup.style.display="none"; popup.style.visibility="hidden"
    }}




window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}

document.addEventListener('DOMContentLoaded', main);

    


