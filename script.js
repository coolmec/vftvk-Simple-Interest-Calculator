// Main function for amount input checking and result calculation
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal *years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }    
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+
    "\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+
    "%\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+
    "\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    return true;
}

// Function to show the selected value for rate to apply
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
    return true;
}
        