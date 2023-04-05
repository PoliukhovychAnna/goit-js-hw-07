import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

function createGallery(arr) {
   return arr.map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
};

list.insertAdjacentHTML("beforeend", createGallery(galleryItems));

list.addEventListener("click", onImgClick)


function onImgClick(evt) {
    evt.preventDefault();

    const img = evt.target
    if (!img.classList.contains("gallery__image")) {
        return
    }

    const imgSrc = img.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${imgSrc}" width="800" height="600">`);
    instance.show();

    document.addEventListener("keydown", handleKeyDown);
    
    function handleKeyDown(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleKeyDown);
    }
  }
  

}
   


