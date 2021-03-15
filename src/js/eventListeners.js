import refs from './refs.js';
import serviceImage from './apiService.js';
import updateImageMarkup from './updateMarkup.js';

import { noImagesMessage, noMoreImagesMessage } from './notifications.js';

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    serviceImage.searchQuery = refs.input.value;
    if (refs.searchForm.elements.query.value === '') {
        refs.gallery.innerHTML = '';
        return;
    }


    refs.loadBtn.classList.add('is-hidden');
    refs.searchForm.reset();
    refs.gallery.innerHTML = '';
    serviceImage.resetPage();
    serviceImage.fetchImage().then(hits => {
        if (hits.length === 0) {
            noImagesMessage();
            return;
        }
        updateImageMarkup(hits);
        refs.loadBtn.classList.remove('is-hidden');
        scrollingWindow();
    });
});

function scrollingWindow() {
    window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
    });
}
refs.loadBtn.addEventListener('click', () => {
    serviceImage.fetchImage().then(hits => {
        if (hits.length === 0) {
            noMoreImagesMessage();
            return;
        }
        updateImageMarkup(hits);
        refs.loadBtn.classList.remove('is-hidden');
        scrollingWindow();
    });
});
import refs from './refs.js';
import serviceImage from './apiService.js';
import updateImageMarkup from './updateMarkup.js';

import { noImagesMessage, noMoreImagesMessage } from './notifications.js';

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    serviceImage.searchQuery = refs.input.value;
    if (refs.searchForm.elements.query.value === '') {
        refs.gallery.innerHTML = '';
        return;
    }
    refs.gallery.innerHTML = '';
    serviceImage.resetPage();

    refs.loadBtn.classList.add('is-hidden');
    refs.searchForm.reset();

    serviceImage.fetchImage().then(hits => {
        if (hits.length === 0) {
            noImagesMessage();
            return;
        }
        updateImageMarkup(hits);
        refs.loadBtn.classList.remove('is-hidden');
        scrollingWindow();
    });
});

refs.loadBtn.addEventListener('click', () => {
    serviceImage.fetchImage().then(hits => {
        if (hits.length === 0) {
            noMoreImagesMessage();
            return;
        }
        updateImageMarkup(hits);
        refs.loadBtn.classList.remove('is-hidden');
        scrollingWindow();
    });
});

function scrollingWindow() {
    window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
    });
}