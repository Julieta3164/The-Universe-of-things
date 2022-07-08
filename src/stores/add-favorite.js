import { defineStore } from 'pinia'

export const userFavoriteStore = defineStore({
    id: 'favorites',
    state: () => ({
        favorite: [],
    }),
    actions: {
        addFavorite(data) {
            data.editing = true;
            this.favorite.push(data);
        }
    }
})