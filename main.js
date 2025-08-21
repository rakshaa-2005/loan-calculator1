const amountInputs = document.querySelectorAll(".amount");
const principalInput = amountInputs[0];
const rateInput = amountInputs[1];
const yearsInput = amountInputs[2];
const calculateBtn = document.querySelector(".Calculate");
const monthlyInput = document.querySelector(".monthly");
const paymentInput = document.querySelector(".payment");
const interestInput = document.querySelector(".Interst");

console.log("Calculate Button:", calculateBtn);
console.log("Principal Input:", principalInput);
console.log("Rate Input:", rateInput);
console.log("Years Input:", yearsInput);
console.log("Monthly Payment Input:", monthlyInput);
console.log("Total Payment Input:", paymentInput);
console.log("Total Interest Input:", interestInput);

calculateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Calculate button clicked");

    const principal = parseFloat(principalInput.value); //parseFloat is to convert string into number
    const annualRate = parseFloat(rateInput.value);
    const years = parseFloat(yearsInput.value);
    
    console.log("Principal:", principal);
    console.log("Annual Rate:", annualRate);
    console.log("Years:", years);

    const monthly=parseFloat(monthlyInput.value);
    const total=parseFloat(paymentInput.value);
    const interest=parseFloat(interestInput.value);
    
    console.log("Monthly Payment:",monthly);
    console.log("Total Payment:",total);
    console.log("Totl Interest:",interest);

    if(isNaN(principal) || isNaN(annualRate) || isNaN(years)){   //isNaN --Not a Number If any of the inputs is not a number (for example, if a user types text instead of a number), it shows an alert.
        alert("Please enter valid numbers in all fields")
        return;
    }

    const monthlyRate=annualRate/100/12;
    const totalPayments=years * 12;

    const x = Math.pow(1 + monthlyRate, totalPayments);
    const monthlyPayment = (principal * x * monthlyRate) / (x - 1);

        if (isFinite(monthlyPayment)) {  //isFinite() checks whether the calculated monthlyPayment is a real number.
        const totalPayment = monthlyPayment * totalPayments;
        const totalInterest = totalPayment - principal;

        monthlyInput.value = monthlyPayment.toFixed(2);
        paymentInput.value = totalPayment.toFixed(2);
        interestInput.value = totalInterest.toFixed(2);
    } else {
        alert("Calculation error. Please check your input values.");
    }


});

