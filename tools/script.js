document.getElementById('binary').addEventListener('click', function() {
    var ul = this.nextElementSibling;
    var icons = this.querySelectorAll('.fa-angle-right'); // Using querySelectorAll to target all icons

    // Toggle display of the nested list
    if (ul.style.display === "none") {
        ul.style.display = "block";
        icons.forEach(function(icon) {
            icon.classList.add('rotate'); // Add rotate class to each icon
        });
    } else {
        ul.style.display = "none";
        icons.forEach(function(icon) {
            icon.classList.remove('rotate'); // Remove rotate class from each icon
        });
    }

    // Toggle background color and text color
    if (this.style.backgroundColor === "rgb(0, 123, 255)") { // RGB value for #007bff
        this.style.backgroundColor = "#ffffff"; // Normal background color
        this.style.color = "#474747"; // Normal text color
    } else {
        this.style.backgroundColor = "#007bff"; // Active background color
        this.style.color = "#ffffff"; // Active text color
    }
});