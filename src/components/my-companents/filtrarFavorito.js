function filterSuperHeroes(superHeroes) {
    let favorites = this.favoritesHeroes || []
    console.log(favorites.length)
    return superHeroes.filter(p =>
        p.name.toLowerCase().indexOf(this.superHeroSearch.toLowerCase()) != -1 &&
        !(favorites.find(q => q.id == p.id))
    )
}