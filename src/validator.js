const validator = {
  isValid: () => {    
    const numTarValue=numTarElem.value;
    //const isValid = creditCardNumber => {  //por el momento inexistente
    if(isNaN(numTarValue)) {
        alert('Ingrese solo numeros')   
    }
    else{
        //let arr = (creditCardNumber  +'') // por el momento inexistente
        let  arr = (numTarValue +'') 
        .split('')
        .reverse()
        .map(str=>parseInt(str))
        //revierte y convierte a num el array
        console.log(arr);
        let newArr=[];
        let sum=0;
        for(i=0;i<arr.length;i++){ 
            newArr[i]=(i%2==0)? arr[i]*2  :arr[i]; //agrego los elementos al array sin push al usar newArr[i] (if index es par lo duplico,sino lo dejo normal) 
            console.log(newArr);
            //if (newArr[i]>9){ newArr[i] -=9} mejor uso el Op. ternario
            newArr[i]>9 ? newArr[i]-=9 :newArr[i];
            sum+=newArr[i];
        } 
        let tenMulti=sum%10===0;
        showResult(tenMulti);
        return tenMulti; 
    }    
  };
  ,// separo los metodos 
  
  maskify:(num)=>{
    arrRev=(num+'').split('').reverse()
      .map(str=>parseInt(str));
    
    let newArr=[];
    for(i=0;i<arrRev.length;i++){
      newArr[i]= i>=4? newArr[i]='#': arrRev[i];
    }
    arrFinal=newArr.reverse().join(''); //piden que sea string y sin separacion->join
    console.log(arrFinal);
    return arrFinal;
  }
};



export default validator;
