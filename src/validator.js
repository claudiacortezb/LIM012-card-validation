const validator = {
  isValid: (creditCardNumber) => {    
    /* if(isNaN(creditCardNumber)) {
        alert('Ingrese solo numeros')   
    }
    else{ */
        let  arr = (creditCardNumber +'') 
        .split('')
        .reverse()
        .map(str=>parseInt(str))
        /* if(creditCardNumber.length<16){
                alert('Ingrese 16 numeros');
        } */
        // else{
            let newArr=[];
            let sum=0;
            for(let i=0;i<arr.length;i++){ 
                newArr[i]=(i%2!=0)? arr[i]*2  :arr[i]; //duplico los index impares para la maquina
                newArr[i]>9 ? newArr[i]-=9 :newArr[i];
                sum+=newArr[i];
            } 
            let tenMulti=sum%10===0;
            return tenMulti;  
        //}    
        
    //} 
}
  ,
  
  maskify:(creditCardNumber)=>{
    let maskNum=(creditCardNumber +'').split('');
    for(let i=0;i<maskNum.length-4;i++){
      maskNum[i]= '#';
    }
    return maskNum.join(''); //piden que sea string y sin separacion->join
  }
};



export default validator;
