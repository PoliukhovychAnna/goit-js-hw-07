import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

function createGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createGallery(galleryItems));

list.addEventListener("click", onImgClick);


function onImgClick(evt) {
    evt.preventDefault();
    
    const lightbox = new SimpleLightbox(".gallery a", {
        captionSelector:'img',
        captionsData: "alt",
        captions: true,
      captionDelay: 250,
    });
}
