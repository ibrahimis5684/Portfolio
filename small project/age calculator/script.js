function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;

    if (birthdate === "") {
        alert("Please enter your birthdate");
        return;
    }

    var today = new Date();
    var birthdate = new Date(birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = "Your age is: " + age + " years";
}