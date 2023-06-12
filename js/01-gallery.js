import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup (galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
})
.join("");
}

const galleryEl = document.querySelector(".gallery");
const imgMarkup = createGalleryMarkup (galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", imgMarkup);

galleryEl.addEventListener("click", handleImgCardClick);
// console.log(galleryItems);

function handleImgCardClick(ev) {
    ev.preventDefault();
    

    if (!ev.target.classList.contains("gallery__image")) {
        return;
    }
    // console.log(ev.target);

    const galleryModal = basicLightbox.create(`
    <img src="${ev.target.dataset.source}">
`,
   { onShow: () => window.addEventListener("keydown", onEscKeyPress),
     onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    },
);
galleryModal.show();

function onEscKeyPress(ev) {
    const ESC_KEY_CODE = "Escape";
    if (ev.code === ESC_KEY_CODE) {
        galleryModal.close();
    }
}
}