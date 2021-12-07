result=document.querySelector('.result');  // window with result after calculate bmi
result.hidden = true;


inputs=document.querySelectorAll('input');

inputs[0].addEventListener('click',  () => { inputs[0].classList.add('clickText')}); // inputs[0] - weight input
inputs[1].addEventListener('click', () => { inputs[1].classList.add('clickText')});  // inputs[1] - height input


btnK=document.querySelector('.sex1');
btnM=document.querySelector('.sex2');

function addRemove (x,y) {
    x.classList.add('clickButton'); 
    y.classList.remove('clickButton');
}

btnK.addEventListener('click', () => {addRemove (btnK, btnM)} );
btnM.addEventListener('click', () => {addRemove (btnM, btnK)} );

btnCalculate=document.querySelector('.calculate');

btnCalculate.addEventListener('mousedown', () => {btnCalculate.classList.add('clickText')});
btnCalculate.addEventListener('mouseup', () => {btnCalculate.classList.remove('clickText')});


weightAlert=document.querySelector('.weightAlert');
heightAlert=document.querySelector('.heightAlert');
sexAlert=document.querySelector('.sexAlert');
result=document.querySelector('.result');
score=document.querySelector('.bmiResult p');
explain=document.querySelector('.bmiExplain span');
arrow=document.querySelector('.bmiIndex i');
crossX=document.querySelector('.fa-times');
    

btnCalculate.addEventListener('click', bmi);
crossX.addEventListener('click', cross);

function bmi() {

    if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[1].value < 4 && btnK.classList.contains('clickButton') | btnM.classList.contains('clickButton') ) {
      result.hidden = false;
      result.style.visibility = 'visible';
      
      calculator.style.display = 'none';

      equation= inputs[0].value/(inputs[1].value*inputs[1].value);
      equation= equation.toFixed(2);
      score.innerText= equation; 

        if(equation >= 18.5 && equation <= 24.99){

            explain.classList.add("okValue");
            explain.innerText = "prawidłową masę ciała";
            explain.classList.remove('middleValue');
            explain.classList.remove('badValue');
            explain.classList.remove('lowValue');
            explain.classList.remove('veryBadValue');

            
        }else if (equation >= 25 && equation <= 29.99){
           
            explain.classList.add("middleValue");
            explain.innerText = "nadwagę";
            explain.classList.remove('okValue');
            explain.classList.remove('badValue');
            explain.classList.remove('lowValue');
            explain.classList.remove('veryBadValue');
            
        }else if (equation >= 30 && equation <= 34.99){
            
            explain.classList.add("badValue");
            explain.innerText = "otyłość";
            explain.classList.remove('middleValue');
            explain.classList.remove('okValue');
            explain.classList.remove('lowValue');
            explain.classList.remove('veryBadValue');
           
        }else if(equation <= 18.4){
            
            explain.classList.add("lowValue");
            explain.innerText = "niedowagę";
            explain.classList.remove('middleValue');
            explain.classList.remove('badValue');
            explain.classList.remove('okValue');
            explain.classList.remove('veryBadValue');
         
        }else if (equation >= 35) {
            explain.innerText = "otyłość dużego stopnia!";
            explain.classList.add("veryBadValue");
            explain.classList.remove('middleValue');
            explain.classList.remove('badValue');
            explain.classList.remove('lowValue');
            explain.classList.remove('okValue');
            
        }
        
    }

    if (inputs[0].value == 0 ){
        weightAlert.innerText='podaj masę ciała';
    }else (weightAlert.innerText="")
    
    if (inputs[0].value <0){
        weightAlert.innerText='podaj odpowiednią wartość'
    }
  
    if (inputs[1].value == 0 ){
        heightAlert.innerText='podaj wzrost';
    }else (heightAlert.innerText="")

    if (inputs[1].value >4){
        heightAlert.innerText='podaj wzrost w metrach'

    }
    if (btnK.classList.contains('clickButton') | btnM.classList.contains('clickButton') ){
        sexAlert.innerText='';
    }else (sexAlert.innerText='Podaj płeć')


}

calculator=document.querySelector('.calculator');

function cross(){
    result.hidden = true;
    calculator.style.display = 'flex';
    inputs.forEach(el =>{
        el.classList.remove('clickText');
        el.value='';
    });
    [btnK, btnM].forEach(el =>{
        el.classList.remove('clickButton');
})
}

window.onload = function(){ document.querySelector(".loader").style.display = "none"; document.querySelector(".lds-grid ").style.display = "none";}