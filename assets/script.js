
// Définir l'index de la diapositive actuelle
let slideIndex = 1;
showSlides(slideIndex);

// Afficher la diapositive suivante
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Afficher la diapositive actuelle
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/*************  ✨ Codeium Command 🌟  *************/
//  Masquer la diapositive actuelle et afficher la suivante
/**
 * @param {number} n Index de la diapositive suivante à afficher
 */
function showSlides(n) {
    // Obtenez la liste de toutes les diapositives et points
    const slides = document.getElementsByClassName("banner-img");
    const dots = document.getElementsByClassName("dot");
    // Calculer l'index de la diapositive à afficher
    slideIndex = ((n - 1 + slides.length) % slides.length) + 1;
    // Afficher la diapositive et le point correspondant
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = (i + 1 === slideIndex) ? "block" : "none";
        //  Supprimer la classe active de tous les points
        dots[i].classList.remove("active");
    }
    // Ajouter la classe active au point correspondant
    dots[slideIndex - 1].classList.add("active");

}
/******  a9c7ae5d-944c-431c-b55b-808d09177ee4  *******/
