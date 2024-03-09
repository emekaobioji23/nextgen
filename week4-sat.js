const checkIfNumberIsNarcisisticInBase10=(anyNumber)=>{
    let numberIsNarcisistic = false;
    //check if base is greater than 10
    let stringValue = anyNumber.toString();
    let numberBase = stringValue.length;
    if(numberBase<=10){
        //within base 10
        let anyCharacter = '';
        let sum = 0;
        for(i=0;i<numberBase;i++){
            anyCharacter = stringValue.charAt(i);
            sum += parseInt(anyCharacter)**numberBase;
            console.log(`${sum} = ${anyCharacter}**${numberBase}`);
        }
        if(sum==anyNumber){
            numberIsNarcisistic =  true;
        }
    }
    return numberIsNarcisistic;
}
console.log(checkIfNumberIsNarcisisticInBase10(1652));
console.log(checkIfNumberIsNarcisisticInBase10(4338281769391371));
const convertIntegerToBinaryAndCountThe1s=(integerNumber)=>{
    let base2String = integerNumber.toString(2);
    //console.log(/1/.test(base2String));
    console.log(base2String.match(/1/g));
    return (base2String.match(/1/g) || []).length;
}
console.log(convertIntegerToBinaryAndCountThe1s(0));