import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" 
   href=${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`;
    })
    .join("");
    }
    
    const galleryEl = document.querySelector(".gallery");
    const imgMarkup = createGalleryMarkup (galleryItems);
    
    galleryEl.insertAdjacentHTML("afterbegin", imgMarkup);
    
    
   var lightbox = new SimpleLightbox(".gallery a",
        {captionsData: "alt",
        captionDelay: 250,});


console.log(galleryItems);
