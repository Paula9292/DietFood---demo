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


const addAim=document.querySelector('.round');
const area = document.querySelector('.area');
const textArea= document.querySelector('.textArea');
const plusIcon = document.querySelector('.fa-plus')

function addAimFunct(){
area.classList.toggle('add-remove-class');
textArea.innerText='';
textArea.value='';
plusIcon.classList.toggle('transformation')
}

addAim.addEventListener('click', addAimFunct);


const addTask=document.querySelector('.fa-check');
const ulList=document.querySelector('.aim');
const noAim=document.querySelector('.no-aim');


function addTaskFunct() {
    if(textArea.value!==''){
     const aim= document.createElement('li');
     ulList.appendChild(aim);
     aim.innerText=textArea.value
     const icon=document.createElement('i');
     aim.appendChild(icon);
     icon.innerHTML='<i class="fas fa-times"></i>'
     noAim.innerText='';
     area.classList.remove('add-remove-class');
     aim.style.margin='5px'
     plusIcon.classList.toggle('transformation')
     
     icon.addEventListener('click', () => {const deleteLi = icon.closest("li"); deleteLi.remove()});
    }
}

addTask.addEventListener('click', addTaskFunct);

function enterKey(e){
    if(e.key==='Enter'){
        addTaskFunct()
    }
}

textArea.addEventListener('keyup', enterKey);


const deleteText=document.querySelector('.fa-arrow-left');

deleteText.addEventListener('click', function(){
textArea.innerText= '';
textArea.value='';
})



window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}
