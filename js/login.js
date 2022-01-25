window.alert('Aby przejść dalej zaloguj się lub załóż konto!');

login=document.querySelector('.log');    
join=document.querySelector('.join');

login.classList.add("active");


function addRemoveClass (add, remove) {
    add.classList.add("active");
    remove.classList.remove('active');
}

join.addEventListener('click', () => {addRemoveClass (join, login)});
login.addEventListener('click', () => {addRemoveClass (login, join)});


inputs= document.querySelectorAll ('input');  // User name and password input

inputs[0].addEventListener('click', () => {inputs[0].classList.add("clickButton")});
inputs[1].addEventListener('click', () => {inputs[1].classList.add("clickButton")});


loginButton=document.querySelector('.loginButton');
link=document.querySelector('.login-link')

function loginCheck(){
    inputs.forEach(el => {
        if (el.value === "" ){
        showError(el,el.placeholder);
        }else {
        clearError(el, '');
        }
    })
    }

function showError(input, msg){
        const formBox= input.parentElement;
        const errorMsg = formBox.querySelector(".error");
        errorMsg.innerText=msg
    }
    
function clearError(input, msg){
        const formBox= input.parentElement;
        const errorMsg = formBox.querySelector(".error");
        errorMsg.innerText=msg
    }


 function nextPage() {
        if (inputs[0] !=='' && inputs[1].value !=='') {
            location.href='/DietFood---demo/html/account.html';
        }
    }
    
loginButton.addEventListener('click', loginCheck);
loginButton.addEventListener('click', nextPage);




function enterKey(e){
    if(e.key==='Enter'){
        nextPage()
    }
}

inputs[1].addEventListener('keyup', enterKey);

window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}