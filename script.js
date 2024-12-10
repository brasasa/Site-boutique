// résultat ChtatGPT ne fonctionne pas, mettre plusieurs lightbox sur une page ok, fonctonnalité: essayer d'adapter le code dispo d'une autre lightbox pour lequel le formatage n'était pas bon lorsque l'on rajoute une lightbox dans la page (mais était fonctinnelle seule sur la page)

document.addEventListener("DOMContentLoaded", function() {
  // Fonction pour changer l'image principale dans une lightbox
  function changeMainImage(lightboxId, imageSrc) {
      const mainImage = document.querySelector(`#${lightboxId} .main-image img`);
      mainImage.src = imageSrc;
  }

  // Initialisation des images principales
  const lightbox1MainImage = document.querySelector('#lightbox1 .main-image img');
  lightbox1MainImage.src = lightbox1MainImage.src; // Affiche l'image par défaut dans lightbox1

  const lightbox2MainImage = document.querySelector('#lightbox2 .main-image img');
  lightbox2MainImage.src = lightbox2MainImage.src; // Affiche l'image par défaut dans lightbox2

  // Ciblage des miniatures et gestion des événements de clic
  document.querySelectorAll('.lightbox').forEach(lightbox => {
      const thumbnails = lightbox.querySelectorAll('.thumbnail');

      thumbnails.forEach(thumbnail => {
          thumbnail.addEventListener('click', function() {
              const newImage = this.getAttribute('data-image');
              const lightboxId = lightbox.id;
              changeMainImage(lightboxId, newImage);
          });
      });
  });
});