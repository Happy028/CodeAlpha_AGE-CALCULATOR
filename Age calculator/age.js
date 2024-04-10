function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var dob = new Date(dobInput);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    var result = document.getElementById("result");
    result.innerText = "Your age is: " + age;
}
