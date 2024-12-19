let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("banner-img");
    const dots = document.getElementsByClassName("dot");
    slideIndex = ((n - 1 + slides.length) % slides.length) + 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = (i + 1 === slideIndex) ? "block" : "none";
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");

}
