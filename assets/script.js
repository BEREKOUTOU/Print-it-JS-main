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
let dotsArray = Array.from(dots.children);

// Initialiser la diapositive
function slide(index)  {
    // Mettre à jour l'image, le texte et le point actuel
    bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
    // Mettre à jour le texte
    bannerText.innerHTML = slides[index].tagLine;
    // Mettre à jour le point actuel
    dotsArray.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i === index) {
            dot.classList.add("active");
        }
    });
};
// Initialiser la diapositive suivante
const nextSlide = () => {
    // Trouver l'index de la diapositive actuelle et changer la diapositive suivante
    let currentSlide = dotsArray.findIndex((dot) => dot.classList.contains("active"));
    // Si la diapositive actuelle est la dernière, revenir à la première
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slide(currentSlide);
};
// Initialiser la diapositive précedente
const prevSlide = () => {
    // Trouver l'index de la diapositive actuelle et changer la diapositive précedente
    let currentSlide = dotsArray.findIndex((dot) => dot.classList.contains("active"));
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    slide(currentSlide);
};
// Initialiser la diapositive suivante au clic
arrowRight.addEventListener("click", nextSlide);
// Initialiser la diapositive précedente au clic
arrowLeft.addEventListener("click", prevSlide);
// Initialiser la diapositive suivante au clavier
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextSlide();
    } else if (e.key === "ArrowLeft") {
        prevSlide();
    }
})
// Initialiser la diapositive au clic sur les points   
function init(){
    slides.forEach((_, i) => {
        const dot = document.createElement("span")
        dot.classList.add("dot")
        if (i===0) { 
            dot.classList.add("active")
        }
        dot.addEventListener("click", () => {
            slide(i);
        });
        dots.appendChild(dot)
    });
     dotsArray = Array.from(dots.children);
}
init() // Initialiser la diapositive   
