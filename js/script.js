// Fade-in Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
});

const hiddenElements = document.querySelectorAll(
".showcase, .product-card, .review, .ai-section, .contact"
);

hiddenElements.forEach((el) => observer.observe(el));


// Navbar Background on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 100){
        navbar.style.background = "rgba(0,0,0,0.95)";
    }else{
        navbar.style.background = "rgba(0,0,0,0.6)";
    }

});


// Product Hover Glow

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow =
        "0 0 30px rgba(212,175,55,0.4)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });

});


// Smooth Button Animation

const buttons = document.querySelectorAll(
".gold-btn, .outline-btn, .product-card button"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});
