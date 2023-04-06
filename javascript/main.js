//Global Variables
var btn = document.querySelector("#calculator-buttton-container_btn"); 

    //Variables error labels
    let dayError = document.querySelector(".day-input-section-container_form_day-container_day-error-label");
    let monthError = document.querySelector(".day-input-section-container_form_day-container_month-error-label");
    let yearError = document.querySelector(".day-input-section-container_form_day-container_year-error-label");
    
    //Variables title labels
    let daylabel = document.querySelector(".day-input-section-container_form_day-container_day-label");
    let monthlabel = document.querySelector(".day-input-section-container_form_day-container_month-label");
    let yearlabel = document.querySelector(".day-input-section-container_form_day-container_year-label");
    
    //border variable
    let borderinput = document.querySelector(".day-input-section-container_form_birth-input");
    
    //inputs variables
    let dayInput = document.querySelector("#day-input-section-container_form_day-container_day-input");
    let monthInput = document.querySelector("#day-input-section-container_form_day-container_month-input");
    let yearInput = document.querySelector("#day-input-section-container_form_day-container_year-input");
    
    //Bool to verify
    let daybol = false;
    let monthbol = false;
    let yearbol = false;
    
    //Validate
//Functions

function dayvalidation() {
    if (dayInput.value >= 32) {
        dayError.innerHTML = "Must be a valid day";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        daylabel.style.color = "hsl(0, 100%, 67%)";
        daybol = false;
    }
    else {
        dayError.innerHTML = "";
        daylabel.style.color = "hsl(0, 1%, 44%)";
        dayInput.style.borderColor = "hsl(0, 0%, 8%)";
        daybol = true;
    }

    if (dayInput.value.length == 0) {
        dayError.innerHTML = "Field is required";
        daylabel.style.color = "hsl(0, 100%, 67%)";
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        daybol = false;
    }
}

function monthvalidation() {
    if (monthInput.value > 12) {
        monthError.innerHTML = "Must be a valid month";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        monthlabel.style.color = "hsl(0, 100%, 67%)";
        monthbol = false;
    }
    else {
        monthError.innerHTML = "";
        monthlabel.style.color = "hsl(0, 1%, 44%)"
        monthInput.style.borderColor = "hsl(0, 0%, 8%)"
        monthbol = true;
    }

    if (monthInput.value.length == 0) {
        monthError.innerHTML = "Field is required";
        monthlabel.style.color = "hsl(0, 100%, 67%)";
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        monthbol = false;
    }
}

function yearvalidation() {
    if (yearInput.value > 2023) {
        yearError.innerHTML = "Must be a valid year";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        yearlabel.style.color = "hsl(0, 100%, 67%)";
        yearbol = false;
    }
    else {
        yearError.innerHTML = "";
        yearlabel.style.color = "hsl(0, 1%, 44%)"
        yearInput.style.borderColor = "hsl(0, 0%, 8%)"
        yearbol = true;
    }

    if (yearInput.value.length == 0) {
        yearError.innerHTML = "Field is required";
        yearlabel.style.color = "hsl(0, 100%, 67%)";
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        yearbol = false;
    }
}

yearInput.addEventListener("input", function(){
    yearvalidation();
})

dayInput.addEventListener("input", function() {
   dayvalidation();
}) 

monthInput.addEventListener("input", function() {
    monthvalidation();
})

btn.addEventListener("click", function() {
    dayvalidation();
    monthvalidation();
    yearvalidation();

    if (daybol === true && 
        monthbol === true && 
        yearbol === true) {
        
        console.log("Everything went trough succesfully");
        
        var birthdate = "2000-02-22";

        var birthdateparts = birthdate.split("-");
        var birthyear = parseInt(birthdateparts[0]);
        var birthmonth = parseInt(birthdateparts[1]);
        var birthday = parseInt(birthdateparts[2]);

        // Calculate current date
        var currentdate = new Date();
        var currentyear = currentdate.getFullYear();
        var currentmonth = currentdate.getMonth() + 1;
        var currentday = currentdate.getDate();

        // calculate years
        var ageyears = currentyear - birthyear;
        var agemonths = currentmonth - birthmonth;
        var agedays = currentday - birthday;

        if (agedays < 0) {
            agedays += 30;
            agemonths--;
        }

        if (agemonths < 0) {
            agemonths += 12
            ageyears--;
        }

        //Show results
        var yearresult = document.querySelector("#number-results-container_years");
        var monthresult = document.querySelector("#number-results-container_months");
        var daysresult = document.querySelector("#number-results-container_days");

        yearresult.innerHTML = ageyears;
        monthresult.innerHTML = agemonths;
        daysresult.innerHTML = agedays;
    }
    else {
        
    }
});