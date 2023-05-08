import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

if (gallery) {
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);

    const box = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        enableKeyboard: true,
        showCounter: false,
        scrollZoom: false,
        close: false,
    });
}

function createGalleryMarkup(items) {
    return items
        .map(
            ({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}" />
            </a>
        </li>
        `
        )
        .join('');
}
