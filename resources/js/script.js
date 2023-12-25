
//-------------about----------------//
var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");

            function opentab(tabname){
                for(tablink of tablinks){
                    tablink.classList.remove("active-link");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab")
            }

//-------------small screen side bar show and hide----------------//

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "-10%";
}
function closemenu(){
    sidemenu.style.right= "-250px";
}

//-------------nav bar active background color----------------//

function changeColor(selectedItem) {
    var items = document.querySelectorAll('#sidemenu a');
    items.forEach(function(item) {
        item.style.background = '#00ffff00';
        item.style.color = '#fff';
    });

    selectedItem.style.background = '#00ffff';
    selectedItem.style.color = '#333';
}

//-------------nav bar scroll to color chenge----------------//

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = "#ccc9c983";
    } else {
        navbar.style.backgroundColor = "#08080800";
    }
});

//--------------contact form--------------//

const scriptURL = 'https://script.google.com/macros/s/AKfycbxq--RoaXojnyI6PInEvDXG6jN6P9bBPC4RhDPWDAv_H1UPwV3mrKbtnJUJ_y1ByinigA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


//   error button

var buttons = document.querySelectorAll('#errorButton');

    // Loop through each element and add a click event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Show an alert when the button is clicked
            alert('This service is currently closed! এই পরিষেবা বর্তমানে বন্ধ আছে!');
        });
    });