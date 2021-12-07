

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


//change diet option -  menu

const selectIcon = document.querySelector('.fa-exchange-alt');
const selectDiet=document.querySelector('.another');
const exitIcon=document.querySelector('.exit');
const selectIconMobile = document.querySelector('.fa-angle-double-right');
const slectDietMobile = document.querySelector('.another-mobile')
const dietLink=document.querySelectorAll('.another a');
const dietLinkMobile=document.querySelectorAll('.another-mobile a');


function selectMenu(){
    selectDiet.classList.add('go-menu');
    selectDiet.classList.add('animation-on');
    selectIcon.style.display="none";
    exitIcon.style.display="flex"
}


selectIcon.addEventListener('click', selectMenu);


function exitSelect(){
   
    selectDiet.classList.remove('animation-on');
    selectDiet.classList.remove('go-menu');
    selectIcon.style.display="flex";
    exitIcon.style.display="none"

}

exitIcon.addEventListener('click', exitSelect);

window.addEventListener('resize', exitSelect);

for(let i = 0; i <dietLink.length; i++) {

    dietLink[i].addEventListener('click', (e) => {e.preventDefault()})
   }
  
   for(let i = 0; i <dietLinkMobile.length; i++) {

    dietLinkMobile[i].addEventListener('click', (e) => {e.preventDefault()})
   }
  

//change diet option - mobile

selectIconMobile.addEventListener('click', () => { slectDietMobile.classList.toggle('add-remove-class')} );

window.addEventListener('resize', () => { slectDietMobile.classList.remove('add-remove-class')});

//change option - change text

const vege = document.querySelectorAll('.vege');
const vegan = document.querySelectorAll('.vegan');
const sport= document.querySelectorAll('.sport');
const dietText= document.querySelector('.hero-img p');

console.log(sport)
for(let i = 0; i < vege.length; i++) {

    vege[i].addEventListener('click', () => {dietText.innerText='Wege'; dietText.style.textTransform='uppercase'})
   }

for(let i = 0; i < vegan.length; i++) {

    vegan[i].addEventListener('click', () => {dietText.innerText='Wegan'; dietText.style.textTransform='uppercase'})
   }

for(let i = 0; i < sport.length; i++) {

    sport[i].addEventListener('click', () => {dietText.innerText='Dla sportowca'; dietText.style.textTransform='uppercase'; dietText.style.textAlign='center'})
   }

//menu for one day


const slectDishInfo= document.querySelector('.info_select_dich ');
const meal=document.querySelectorAll('.meal');
const foodPhoto = document.querySelectorAll('.foodPhoto');
const dish=document.querySelectorAll('.dish');
const dishMenu=document.querySelectorAll('.daily-meals');
const description = document.querySelectorAll('.hero p')


//.. import data from data.js = diet data 


//animation
function menuAnimation(e) {
    e.classList.add('dish-animation');
    e.classList.remove('dish-animationOff');
    slectDishInfo.style.visibility = 'hidden'
   }
    
   function menuOffAnimation(e){
       e.classList.remove('dish-animation');
       
      e.classList.add('dish-animationOff');
   }
   
   
   
   dishMenu[0].addEventListener('click', () => {menuAnimation(dish[0]);});
   dishMenu[0].addEventListener('mouseleave', () => {menuOffAnimation(dish[0])});
   
   
   dishMenu[1].addEventListener('click', () => {menuAnimation(dish[1])});
   dishMenu[1].addEventListener('mouseleave', () => {menuOffAnimation(dish[1])});
   
   dishMenu[2].addEventListener('click', () => {menuAnimation(dish[2])});
   dishMenu[2].addEventListener('mouseleave', () => {menuOffAnimation(dish[2])});
   
   dishMenu[3].addEventListener('click', () => {menuAnimation(dish[3])});
   dishMenu[3].addEventListener('mouseleave', () => {menuOffAnimation(dish[3])});


// na smartfonie myszka jest nie wykrywalna -- należy to dopracowac!

const foodMenu = document.querySelector('.day-menu');
const exitCross=document.querySelectorAll('.fa-times-circle');
foodMenu.style.display="none";

exitCross[1].addEventListener('click', () => {foodMenu.style.display="none";
calendar.style.visibility='visible'; sectionOne.style.visibility="visible"
});


//show menu for one day 

const oneDay = document.querySelectorAll('.actually');
const calendar= document.querySelector('.calender');
const sectionOne=document.querySelector('.one')

oneDay[0].addEventListener('click', () => {foodMenu.style.display="flex"; foodMenu.style.visibility="visible"; 
calendar.style.visibility="hidden"; slectDishInfo.style.visibility="visible";
sectionOne.style.visibility="hidden";
});




const cells = [...oneDay]


const cells1 = cells.splice(1)

console.log(cells1)

const infoPakiet = document.querySelector('.shop');


  

for(let i = 0; i < cells1.length; i++) {

    cells1[i].addEventListener('click', () => {infoPakiet.style.display="flex"})
   }
  
   


   for(let i = 0; i < cells1.length; i++) {

    exitCross[0].addEventListener('click', () => {infoPakiet.style.display="none"})
   }
  

   window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}