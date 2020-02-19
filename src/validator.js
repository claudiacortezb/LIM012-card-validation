const validator = {
  isValid: (creditCardNumber) => {    
    //const numTarValue=numTarElem.value;
    //const isValid = creditCardNumber => {  //por el momento inexistente
    if(isNaN(creditCardNumber)) {
        alert('Ingrese solo numeros')   
    }
    else{
        //let arr = (creditCardNumber  +'') // por el momento inexistente
        let  arr = (creditCardNumber +'') 
        .split('')
        .reverse()
        .map(str=>parseInt(str))
        //convierte a num el array con split y despues revierte
        console.log(arr);
        if(creditCardNumber.length<16){
                alert('Ingrese 16 numeros');
        }
        else{
            let newArr=[];
            let sum=0;
            for(let i=0;i<arr.length;i++){ 
                newArr[i]=(i%2==0)? arr[i]*2  :arr[i]; //agrego los elementos al array sin push al usar newArr[i] (if index es par lo duplico,sino lo dejo normal) 
                console.log(newArr);
                //if (newArr[i]>9){ newArr[i] -=9} mejor uso el Op. ternario
                newArr[i]>9 ? newArr[i]-=9 :newArr[i];
                sum+=newArr[i];
            } 
            let tenMulti=sum%10===0;
            // showResult(tenMulti);
            return tenMulti; 
    
            /*if(sum%10===0)  { 
            screen2Elem.style.display='none';
            screenValidElem.style.display='block';}
            else{ 
            screen2Elem.style.display='none';
            screenInvalidElem.style.display='block';} */   
        }    
        
    } 
}
  ,// separo los metodos 
  
  maskify:(creditCardNumber)=>{
    let arrRev=(creditCardNumber +'').split('').reverse()
      .map(str=>parseInt(str));
    
    let newArr=[];
    for(let i=0;i<arrRev.length;i++){
      newArr[i]= i>=4? newArr[i]='#': arrRev[i];
    }
    let arrFinal=newArr.reverse().join(''); //piden que sea string y sin separacion->join
    console.log(arrFinal);
    return arrFinal;
  }
};



export default validator;
