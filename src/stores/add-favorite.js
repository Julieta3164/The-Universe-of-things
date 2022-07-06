import { defineStore } from 'pinia'

export const userFavoriteStore = defineStore({
    id: 'favorites',
    state: () => ({
        favorite: [],
    }),
    actions: {
        addFavorite(data) {
            this.favorite.push(data);
        }
    }
})