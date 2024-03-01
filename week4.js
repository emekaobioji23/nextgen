/* You have been employed as the new backend developer for “Get It Now” which is a fintech company based on providing loans for individuals and organizations. The ratio of refund of loans had reduced drastically lately, so after collating various data they came up with the following conclusions;
i. an individual below the age of 30 should not be granted loan especially if they have less than 4 years of work experience and they are married. Also they should not be granted loan at all if they are below 24 and they are males while a female can get a loan from the age of 23 upward.
ii. for organization they should only be granted loan if they have been in operation for over 4 years and the money the are requesting for is less than or equal to 50% of their net worth.
 */
const canAProspectiveBorrowerGetALoan=(object)=>{

    let decision = "";
    if (object.type == "individual") {
        decision +="An individual,";
        if (object.gender == "male") {
            decision +=" of masculine gender,";
            if (object.age >= 24) {
                decision +=" with age greater than or equal to 24 years,";
                if (object.age < 30) {
                    decision +=" with age less than 30 years,";
                    if (object.yearsOfWork < 4) {
                        decision +=" with years of work less than 4 years,";
                        if (object.maritalStatus == "married") {
                            decision +=" and is married, is NOT eligible for a loan.";
                        }else{
                            decision +=" and is single, is eligible for a loan.";
                        }
                    }else{
                        decision +=" with years of work greater than 4 years, is eligible for a loan.";
                    }
                }else{
                    decision +=" and with age greater than 30 years is eligible for loan.";
                }
            }else{
                decision +=" and with age less than 24 years is NOT eligible for a loan.";
            }
        }else{
            decision +=" of feminine gender,";
            if (object.age>=23) {
                decision +=" and with age greater than or equal to 23 years is eligible for a loan.";
            }else{
                decision +=" and with age less than 23 years is NOT eligible for a loan.";
            }
        }
    }else{
        decision +="An organisation,"
        if (object.yearsOfOperation > 4) {
            decision +=" in operation for more than 4 years,";
            if (((object.amount/prospectiveBorrower.netWorth)*100) > 50) {
                decision +=" and loan amount as percentage of net worth is greater than 50%, hence, it is NOT eligible for loan.";
            }else{
                decision +=" and loan amount as percentage of net worth is less than 50%, hence, it is eligible for loan.";
            }
        }else{
            decision +=" in operation for 4 years or less, hence, it is NOT eligile for a loan.";
        }
    }
    return decision;
}

let prospectiveBorrower = {
    gender:"male",
    age:56,
    amount:5000000,
    yearsOfWork:10,
    yearsOfOperation:15,
    netWorth:7000000,
    maritalStatus: "single",
    type:"corporate"
}

console.log(canAProspectiveBorrowerGetALoan(prospectiveBorrower));