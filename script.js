// Récupération de l'élément du carrousel
const carousel = document.getElementById('carousel');
// Variable pour suivre l'index actuel de la diapositive
let currentIndex = 0;

// Fonction pour afficher une image spécifique
function showSlide(index) {
    // Récupération du nombre total d'image
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Assurez-vous que l'index reste dans les limites en utilisant le modulo
    // Si index est négatif, on ajoute totalSlides pour le ramener dans les limites
    index = (index + totalSlides) % totalSlides;

    // Mise à jour de l'index actuel
    currentIndex = index;

    // Calcul de la valeur de translation pour déplacer les diapositives
    // Cela déplace le conteneur du carrousel de -index * 100%, chaque diapositive occupant 100% de la largeur du conteneur
    const translateValue = -index * 100 + '%';

    // Application de la transformation CSS pour déplacer les diapositives
    carousel.style.transform = `translateX(${translateValue})`;
}

// Image suivante
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Image précedente
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Change automatique d'image toutes les 5 secondes
setInterval(nextSlide, 5000);