// To play slides automatically for 4s each slide and make pagination bullets working for index.html page
const swiper = new Swiper(".swiper",{
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    effect:"fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// To make navigation bar sticky (following the scrolled screen) for all pages
window.addEventListener("scroll", ()=> {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);});

// Form validation function for contactUs.html page
function validateForm(){
	var name=document.getElementById("fname");
	var lastName=document.getElementById("lname");
	var email=document.getElementById("email").value;
	var telephone=document.getElementById("phone").value;
    var phoneno = /^\d{11}$/;   //Regex (regular expression) for 11 digits patern in a string
	// Checking if all the fields are filled
	if(name.value!=""&&lastName.value!=""&&email!=""&&telephone!="") {
		// Checking if symbol . goes after the symbol @ in the field for email and email includes @ symbol
		if(email.indexOf(".")!=-1&&email.lastIndexOf(".")>email.indexOf("@")&&email.includes("@")) {
           // Checking if entered string is 11 characters and contais only digits (matches the declared regex)
            if(telephone.match(phoneno)) {
            alert("Thank you, your form is submitted");
			return true;  
            }
            else {
                alert("Please enter 11 digit valid phone number");
                return false;
            }
		}
		else {
			alert("Please enter a valid email address");
		}
	}
	else {
	alert("All the fields should be filled");
	}    
	return false;
}

// For the slide gallery of toStay.html page
// Array for 5 different slideshow galleries throughout the page
var slideIndex = new Array(5);
slideIndex[0]=1;
slideIndex[1]=1;
slideIndex[2]=1;
slideIndex[3]=1;
slideIndex[4]=1;

showSlides(1, 0);  
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function currentSlide(n, slideshownumber) 
{
  slideIndex[slideshownumber] = n;
  showSlides(slideIndex[slideshownumber], slideshownumber);
}

function showSlides(n, slideshownumber) 
{
  var i;   // Variable for iteration
  // Building name for different slides of different slide galleries
  var slideshowname = "slider" + slideshownumber;
  var slides = document.getElementsByName(slideshowname); // Getting the slide
  // Building name for different dots (images) of different slide galleries
  var dotname = "dot" + slideshownumber;
  var dots = document.getElementsByName(dotname);  // Getting the image from below line

  if (n > slides.length) 
  {
      slideIndex[slideshownumber] = 1;
  }

  if (n < 1) 
  {
      slideIndex[slideshownumber] = slides.length;
  }

  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[slideshownumber]-1].style.display = "block";
  dots[slideIndex[slideshownumber]-1].className += " active";
} 

