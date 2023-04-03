import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
            src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </li>`
)
    .join('');
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup)

galleryContainer.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'IMG') {
        return
    }
    event.preventDefault();

    const modal = basicLightbox.create(
        `<img src='${event.target.dataset.source}' alt="${event.target.alt}" style="width: 1400px; height: 900px">`,
        {
            onClose: () => {
                document.removeEventListener('keydown', closeModal);
            }
        }
    )
    modal.show()

    const closeModal = function (event) {
        if (event.code === 'Escape') {
            modal.close()
        }
    }
    document.addEventListener('keydown', closeModal)
})


// console.log(galleryItems);
