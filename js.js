// compteur animation
let compteurs = document.querySelectorAll(".compteur");

compteurs.forEach(compteur => {
  let update = () => {
    let target = +compteur.getAttribute("data-target");
    let count = +compteur.innerText.replace(/\D/g,'');

    let increment = target / 100;

    if (count < target) {
      compteur.innerText = Math.ceil(count + increment) + (compteur.dataset.suffix || "");
      setTimeout(update, 20);
    } else {
      compteur.innerText = target + (compteur.dataset.suffix || "");
    }
  };
  update();
});

// bouton retour en haut (page avec #btn-top uniquement)
let btn = document.getElementById("btn-top");
if (btn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}







document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = document.querySelector('#carouselSignature');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 4000,
            ride: 'carousel',
            pause: 'hover'
        });
    }
});







/* Animation au défilement pour les classes .reveal */
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Lancer une fois au chargement
reveal();








// Gère l'effet de focus sur la carte au survol
const cartes = document.querySelectorAll('.carte-plat');

cartes.forEach(carte => {
    carte.addEventListener('mouseenter', () => {
        // On retire la classe active de tout le monde
        cartes.forEach(c => c.classList.remove('active'));
        // On l'ajoute à celle survolée
        carte.classList.add('active');
    });
});







// Utilisation de l'Intersection Observer pour l'effet "reveal"
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));
});














document.addEventListener('DOMContentLoaded', () => {
    const heroMenuBtn = document.querySelector('.btn-menu');
    const heroTableBtn = document.querySelector('.btn-table');

    if (heroMenuBtn) {
        heroMenuBtn.addEventListener('click', () => {
            window.location.href = 'menu.html';
        });
    }

    if (heroTableBtn) {
        heroTableBtn.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }
    
    // 1. Gestion des clics sur les boutons "Commander"
    const orderButtons = document.querySelectorAll('.menu-card .btn-commander');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Empêche le rechargement de la page si c'est un lien <a>
            e.preventDefault();
            
            // Ouvre directement la page Contact lors du clic sur Commander
            window.location.href = 'contact.html';
        });
    });

    // 2. Animation au survol des cartes (Optionnel car géré en CSS, mais utile pour des effets complexes)
    const cards = document.querySelectorAll('.menu-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-lg');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-lg');
        });
    });

});



function initMenuFilters() {
  const boutons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.menu-item');
  if (!boutons.length || !items.length) return;

  boutons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      boutons.forEach(function(b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      const filtre = this.dataset.filter;
      items.forEach(function(item) {
        if (filtre === 'tout' || item.dataset.category === filtre) {
          item.classList.remove('d-none');
          item.style.display = '';
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initMenuFilters);







/* =============================================
   BAOBAB GOURMAND — fichier.js
   JavaScript vanilla — aucun framework
   =============================================
   Fonctionnalités :
   1. Filtre dynamique du menu par catégorie
   2. Bouton retour en haut de page
============================================= */


/* =============================================
   1. FILTRE DYNAMIQUE DU MENU
============================================= */

// On sélectionne tous les boutons de filtre et toutes les cartes
const boutonsFiltres = document.querySelectorAll('.btn-filtre');
const cartesMenu     = document.querySelectorAll('.menu-item');

// On ajoute un écouteur d'événement sur chaque bouton
boutonsFiltres.forEach(function(bouton) {
    bouton.addEventListener('click', function() {

        // Étape 1 : retirer la classe "active" de tous les boutons
        boutonsFiltres.forEach(function(b) {
            b.classList.remove('active');
        });

        // Étape 2 : ajouter "active" sur le bouton cliqué
        this.classList.add('active');

        // Étape 3 : récupérer la valeur du filtre (data-filter)
        var filtre = this.dataset.filter;

        // Étape 4 : afficher ou cacher chaque carte selon la catégorie
        cartesMenu.forEach(function(carte) {
            var categorie = carte.dataset.category;

            if (filtre === 'tout' || categorie === filtre) {
                // Affiche la carte avec une animation douce
                carte.style.display = 'block';
                carte.style.opacity = '0';
                carte.style.transform = 'translateY(10px)';

                // Légère animation d'apparition
                setTimeout(function() {
                    carte.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                    carte.style.opacity    = '1';
                    carte.style.transform  = 'translateY(0)';
                }, 30);

            } else {
                // Cache la carte
                carte.style.display = 'none';
            }
        });
    });
});


/* =============================================
   2. BOUTON RETOUR EN HAUT
============================================= */

// Crée le bouton dynamiquement et l'ajoute au body
var btnRetourFlottant = document.createElement('button');
btnRetourFlottant.id        = 'btn-retour-haut';
btnRetourFlottant.innerHTML = '&#8679;'; // flèche vers le haut
btnRetourFlottant.title     = 'Retour en haut';
document.body.appendChild(btnRetourFlottant);

// Style du bouton
btnRetourFlottant.style.cssText = [
    'position: fixed',
    'bottom: 2rem',
    'right: 2rem',
    'width: 48px',
    'height: 48px',
    'border-radius: 50%',
    'background: #4A235A',
    'color: #fff',
    'border: none',
    'font-size: 1.5rem',
    'cursor: pointer',
    'display: none',
    'align-items: center',
    'justify-content: center',
    'box-shadow: 0 4px 16px rgba(74,35,90,0.4)',
    'z-index: 999',
    'transition: all 0.3s ease'
].join(';');

// Affiche le bouton après 400px de scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
        btnRetourFlottant.style.display = 'flex';
    } else {
        btnRetourFlottant.style.display = 'none';
    }
});

// Clic : remonte en haut
btnRetourFlottant.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});