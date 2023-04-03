import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallry__img"
            src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`
)
    .join('');
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const createdModal = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    swipeClose: false
})
console.log(galleryItems);
