import refs from './refs.js'
import imageCard from '../templates/image-handlebar.hbs'

function updateImageMarkup(hits) {
    const markup = imageCard(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateImageMarkup;