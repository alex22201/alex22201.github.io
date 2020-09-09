var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}


var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");
btn.addEventListener("click", function () { ChangeTheme(); });
function ChangeTheme()
{
   let lightTheme = "CSS/light.css";
   let darkTheme = "CSS/dark.css";

   var currTheme = link.getAttribute("href");
   var theme = "";

   if(currTheme == lightTheme)
   {
    currTheme = darkTheme;
    theme = "dark";
   }
   else
   {
    currTheme = lightTheme;
    theme = "light";
   }

   link.setAttribute("href", currTheme);

   Save(theme);
}
 
