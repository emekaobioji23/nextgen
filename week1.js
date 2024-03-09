/*
ASSIGNMENT
1. Write a JavaScript code snippet demonstrating the use of each type of variable declaration (`var`, `let`, and `const`) showing their differences and explaining the output.
*/
const aConstVariable = 1;
console.log("aConstVariable = ",aConstVariable);
//aConstVariable = 2;
//console.log("aConstVariable = ",aConstVariable);
let aLetVariable = 1;
console.log("aLetVariable = ",aLetVariable);
aLetVariable = 2;
console.log("aLetVariable before child scope = ",aLetVariable);
{
    let aLetVariable = 3;
    console.log("aLetVariable in child scope = ",aLetVariable);
}
console.log("aLetVariable after child scope = ",aLetVariable);

var aVarVariable = 1;
console.log("aVarVariable = ",aVarVariable);
aLetVariable = 2;
console.log("aVarVariable before child scope = ",aVarVariable);
{
    var aVarVariable = 3;
    console.log("aVarVariable in child scope = ",aVarVariable);
}
console.log("aVarVariable after child scope = ",aVarVariable);
/*
2. Write JavaScript code snippets for the following operators and ensure the results are logged on the console; 
Arithmetic Operators 
Comparison Operators 
Logical Operators 
Assignment Operators
Increment/Decrement Operators
*/
console.clear();
//Arithmetic and Comparison
console.log("aConstVariable = ",aConstVariable);
console.log("aLetVariable = ",aLetVariable);
console.log("aVarVariable = ",aVarVariable);
console.log("aLetVariable + aVarVariable - aConstVariable * aConstVariable / aLetVariable = ",aLetVariable+aVarVariable-aConstVariable*aConstVariable/aLetVariable);
console.log("aLetVariable > aVarVariable = ",aLetVariable>aVarVariable);
console.log("aLetVariable < aVarVariable = ",aLetVariable<aVarVariable);
console.log("aLetVariable >= aVarVariable = ",aLetVariable>=aVarVariable);
console.log("aLetVariable <= aVarVariable = ",aLetVariable<=aVarVariable);
console.log("aLetVariable == aVarVariable = ",aLetVariable==aVarVariable);
console.log("aLetVariable === aVarVariable = ",aLetVariable===aVarVariable);
console.log("aLetVariable != aVarVariable = ",aLetVariable!=aVarVariable);
console.log("aLetVariable !== aVarVariable = ",aLetVariable!==aVarVariable);
console.log("aLetVariable ? aVarVariable : aConstVariable = ",aLetVariable?aVarVariable:aConstVariable);


console.clear();
//Logical
console.log("aConstVariable = ",aConstVariable);
console.log("aLetVariable = ",aLetVariable);
console.log("aVarVariable = ",aVarVariable);
console.log("aLetVariable < aVarVariable || aLetVariable > aVarVariable = ",aLetVariable<aVarVariable||aLetVariable<aVarVariable);
console.log("aLetVariable < aVarVariable && aLetVariable > aVarVariable = ",aLetVariable<aVarVariable&&aLetVariable>aVarVariable);
console.log("!(aLetVariable < aVarVariable || aLetVariable > aVarVariable) = ",!(aLetVariable<aVarVariable||aLetVariable<aVarVariable));

console.clear();
//assignment and increment
console.log("aConstVariable = ",aConstVariable);
console.log("aLetVariable = ",aLetVariable);
console.log("aVarVariable = ",aVarVariable);
console.log("aLetVariable = aVarVariable + aLetVariable = ",aLetVariable=aVarVariable+aLetVariable);
console.log("aLetVariable = aVarVariable * aLetVariable = ",aLetVariable=aVarVariable*aLetVariable);
console.log("aLetVariable++  = ",aLetVariable++);
console.log("aLetVariable--  = ",aLetVariable--);
console.log("aLetVariable  = ",aLetVariable);
console.log("++aLetVariable = ",++aLetVariable);
console.log("--aLetVariable  = ",--aLetVariable);
console.log("aLetVariable  = ",aLetVariable);