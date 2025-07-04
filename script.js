const bubbleContainer = document.getElementById('bubbleContainer');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 12 + 6;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 4 + 3}s`;

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 7000);
}

// Generate bubbles continuously
setInterval(createBubble, 300);





var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}




var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// ----------------for contact us form---------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzaKOh4DDMyYf6IYbNKJkyvu1HGSpP4i1GHvk08_Ni_LodFNjdFL5XVKHBPD_kKYEN7/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
