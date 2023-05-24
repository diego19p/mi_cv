document.addEventListener("DOMContentLoaded", function() {
    var scrollDownLink = document.querySelector(".scroll-down");
    var contentSection = document.querySelector(".content-section");
    var socialLinks = document.querySelector(".social-links");

    if (scrollDownLink) {
        scrollDownLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: "smooth" });
            socialLinks.classList.remove("social-links-hidden");
        }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollDownLink = document.querySelector(".scroll-down");
    var socialLinks = document.querySelector(".social-links");

    if (scrollDownLink) {
        scrollDownLink.addEventListener("click", function(event) {
            event.preventDefault();
            if (socialLinks) {
                socialLinks.classList.remove("social-links-hidden");
            }
        });
    }

    window.addEventListener("scroll", function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Define la cantidad de píxeles que el usuario debe desplazarse hacia abajo para mostrar las redes sociales automáticamente
        var scrollThreshold = 200;

        if (scrollPosition >= scrollThreshold && socialLinks) {
            socialLinks.classList.remove("social-links-hidden");
        }
    });
});
