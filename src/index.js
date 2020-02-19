import validator from './validator.js';
// const cardNumberInput=document.getElementById('cardNumber-input');
// const cardNumberOutput=document.getElementById('cardNumber-output');

const screen1Elem=document.getElementById('screen1');
const screen2Elem=document.getElementById('screen2');
const screenValidElem=document.getElementById('screenValid');
const screenInvalidElem=document.getElementById('screenInvalid');


//First
const inputElem =document.getElementById("inputName");//tiene value
//Second
const spanNameElem=document.getElementsByName('spanName')[0]; //tiene value
const numTarElem=document.getElementById('numTar'); //tiene value
    //const creditCardNumber =numTarValue; //por el momento inexistente

//Third
const spanNumberElem=document.getElementsByName('spanNumber')[0];

//buttons
const welcomButElem=document.getElementById('welcomBut');
const validButElem=document.getElementById('validBut');
const againBut1Elem=document.getElementsByClassName('againBut')[0];
const againBut2Elem=document.getElementsByClassName('againBut')[1];
const outBut1Elem=document.getElementsByClassName('outBut')[0];
const outBut2Elem=document.getElementsByClassName('outBut')[1];

//no se si debe ir aqui
let userName;
const sendName=()=>{
    const inputValue=inputElem.value;//debe estar dentro del sendName,sino no toma el value
    if(inputValue.trim()==('') ){
        alert('Por favor ingrese su nombre');
    }
    else if (isNaN(inputValue)===false) {
        alert('Por favor ingrese un nombre correcto')
    }
    else {
        userName=inputValue.trim();
        screen1Elem.style.display='none';
        spanNameElem.textContent=userName;
        screen2Elem.style.display='block';
        console.log(userName);       
    }    
}
welcomButElem.addEventListener('click',sendName);





// let result=true;
// let hash;

// result=validator.isValid(numTarElem.value);



const callIsVa=()=>{
    let result=validator.isValid(numTarElem.value);
    showResult(result);
}

validButElem.addEventListener('click',callIsVa);


const showResult=(x)=>{
        if(x){ 
        screen2Elem.style.display='none';
        screenValidElem.style.display='block';}
        else{ 
        spanNumberElem.textContent=validator.maskify(numTarElem.value);//no puedo llamar defrente a numTarValue porque no esta en el scope
        screen2Elem.style.display='none';
        screenInvalidElem.style.display='block';  
        } 
}


const again=()=>{
    screenValidElem.style.display='none';
    screenInvalidElem.style.display='none';
    screen2Elem.style.display='block';
    numTarElem.value='';//no se puede con numTarValue porque esta afuera del scope
}
againBut1Elem.addEventListener('click',again);
againBut2Elem.addEventListener('click',again);








    
console.log(validator);
