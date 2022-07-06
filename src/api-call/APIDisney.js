export default class APIDisney {

    constructor() {
        this.url = "https://api.disneyapi.dev/characters/"
    }
    async getAPI() {
        let response = await fetch(this.url)
        console.log(response)
        if (response.ok) {
            const datas = await response.json()
            console.log(datas)
            return datas.data
        } else {
            console.log('error HTTP', response.status)
        }
    }
}