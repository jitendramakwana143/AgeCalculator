function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();

    // Calculate the difference in years, months, and days
    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    // Adjust the months and days if necessary
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += (days < 0 ? 11 : 12);
    }
    if (days < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += lastMonth.getDate();
        months--;
    }

    // Display the result
    var result = document.getElementById('result');
    result.innerHTML = "Your age is:";
    result.innerHTML =  years + " years  " + months + " months, and " + days + " days.";
}
