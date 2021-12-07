$login=document.querySelector('.log');    
$join=document.querySelector('.join');

$login.classList.add("active");


function addRemoveClass (add, remove) {
    add.classList.add("active");
    remove.classList.remove('active');
}


$join.addEventListener('click', () => {addRemoveClass ($join, $login)});
$login.addEventListener('click', () => {addRemoveClass ($login, $join)});


inputs=document.querySelectorAll('input'); // form inputs: 0 - user name, 1 - user email, 2- password, 3 - password2

inputs[0].addEventListener('click',() =>{inputs[0].classList.add("clickButton")});
inputs[1].addEventListener('click',() =>{inputs[1].classList.add("clickButton")});
inputs[2].addEventListener('click',()=>{inputs[2].classList.add("clickButton")});
inputs[3].addEventListener('click',() => {inputs[3].classList.add("clickButton")});

$signButton=document.querySelector('.signButton');

$signButton.addEventListener('click', function(el) {el.preventDefault(), joinCheck(),checkLength (inputs[0], 8), checkLength(inputs[2],5),checkEmail(inputs[1]), matchPassword(inputs[2],inputs[3])});


function joinCheck(){
    inputs.forEach(el => {
        if(el.value ===''){
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

function checkLength(input, min){
if(input.value.length < min && input.value !=''){
    showError(input,input.placeholder.innerText=`Minimum ${min} znaków!`);
}
}

function checkEmail(email){
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value)){
        clearError(email, '')
    }else{
        showError(email,email.placeholder.innerText=`Email jest niepoprawny!`)
    }
    
   if(email.value ===''){
       showError(email,email.placeholder);
    }else { 
       clearError(email, '');
     }
}

function matchPassword(pass1,pass2){
    if(pass1.value !== pass2.value && pass1.value !=='' ){
        showError(pass2, `Hasła nie pasują do siebie!`)
    }else {
      clearError(pass2, '')  
    }
}

window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}