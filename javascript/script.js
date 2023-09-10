
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

//-------------nav bar scroll to color chenge----------------//

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = "#ccc9c9c2"; // Change the color as desired
    } else {
        navbar.style.backgroundColor = "#080808"; // Change the initial color
    }
});

//--------------contact form--------------//

const scriptURL = 'https://script.google.com/macros/s/AKfycbyd_H5nGNnth9SJKN2KjI4owAP23OtUU7mvhqIXKVqqCoUQOsPynkEgKC8fbni7gPr47A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })