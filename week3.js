/* 2. Write a function that accepts three numbers, it sums the first two
numbers and it then multiples the sum with the third number */
const sumAndMult=(number1,number2,number3)=>{
    return (number1+number2)*number3;
}
console.log(sumAndMult(4,5,10));
console.log(sumAndMult(5,10,4));
console.log(sumAndMult(10,4,5));
/* 2. Write a function called “generateMultiplicationTable” that accepts 2
variables as input, the first being the number that we want to calculate
it’s multiples while the second one is a number that stands for the
highest multiple to be generated from 1. Print to the console
multiplication table for the first variable from 1 to the second variable */
const generateMultiplicationTable=(number1, number2)=>{
    for(i=1;i<=number2;i++){
        console.log(number1+" * "+i+" = "+(number1*i));
    }
}
generateMultiplicationTable(5,12);