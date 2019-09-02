window.onscroll = function () { myFunction() };
var header = document.getElementById("formHeader");
var sticky = header.offsetTop + 48;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};