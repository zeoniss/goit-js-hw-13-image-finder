import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default {
    key: '20448732-c2abd7c565e4d9afcf8e6024e',
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