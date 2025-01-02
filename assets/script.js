const slides = [
    {
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
// Initialiser l'index de la diapositive et le point actuel
const banner = document.getElementById("banner");
const bannerImg = banner.querySelector("img");
const bannerText = banner.querySelector("p");
const arrowLeft = banner.querySelector(".arrow_left");
const arrowRight = banner.querySelector(".arrow_right");
const dots = banner.querySelector(".dots");
const dotsArray = Array.from(dots.children);
// Initialiser la diapositive
const slide = (index) => {
    // Mettre à jour l'image, le texte et le point actuel
    bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    // Mettre à jour le point actuel
    dotsArray.forEach((dot, i) => {
        dot.classList.remove("active");
    });
    dotsArray[index].classList.add("active");
};
// Initialiser la diapositive
const nextSlide = () => {
    // Changer de diapositive
    let currentSlide = dotsArray.findIndex((dot) => dot.classList.contains("active"));
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slide(currentSlide);
};
// Initialiser la diapositive
const prevSlide = () => {
    // Changer de diapositive
    let currentSlide = dotsArray.findIndex((dot) => dot.classList.contains("active"));
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    slide(currentSlide);
};

arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);
dotsArray.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        slide(i);
    });
}); 