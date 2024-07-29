document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault(); 
   showSection('home')
});
function showSection(id) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        sections.classList.remove('active');
});
  
    document.getElementById(id).classList.add('active');
}
showSection('home');



document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.getElementById('about').scrollIntoView({behavior:smooth});
});

document.getElementById('service-link').addEventListener('click', function(e) {
    e.preventDefault();  
   document.getElementById('service').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.getElementById('service').scrollIntoView({behavior: 'smooth'});
});


 document.addEventListener("DOMContentLoaded", function() {
    const aboutMe = "I'm Fatima Conde from Guinea,conakry. I was born and brought up in lagos,Nigeria.I'm a Web developer. I can provide clean code and make perfect designs on websites.I also make website more and more interactive with web animations.";
    const aboutMeElement = document.getElementById("about-text");

    function typeWriter(text, element, speed) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                element.classList.remove("typing");
            }
        }
        element.innerHTML = "";
         element.classList.add("typing");
        type();
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isElementInViewport(aboutTextElement)) {
            typeWriter(aboutText, aboutTextElement, 50);
            window.removeEventListener("scroll", checkVisibility);
        }
    }


    window.addEventListener('scroll', handleScroll);
    document.querySelector('nav').addEventListener('click', handleNavClick);

    
    aboutParagraph.style.animationPlayState = 'stop';
});



// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('contact-form');
//     const successMessage = document.getElementById('success-message');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); 

        
//         setTimeout(() => {
            
//             successMessage.classList.remove('hidden');
            
          
//             form.reset();

            
//             setTimeout(() => {
//                 successMessage.classList.add('hidden');
//             }, 3000); 
//         }, 2000); 
//     });
// });