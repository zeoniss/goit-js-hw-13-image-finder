import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default {
    key: '20318294-75f546a505c22d4a6a744da7a',
    perPage: 12,
    pageNumber: 1,
    searchQuery: '',
    async fetchImage() {
        const query = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${this.key}`;
        const {
            data: { hits },
        } = await axios.get(query);
        this.pageNumber += 1;
        return hits;
    },
    resetPage() {
        this.pageNumber = 1;
    },
};