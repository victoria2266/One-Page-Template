// Nav
let header = document.getElementById("navbarSupportedContent");
let btns = header.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Carousel 
function caruSell() {
    $('.carousel').carousel({
        interval: 3000,
    })
}
