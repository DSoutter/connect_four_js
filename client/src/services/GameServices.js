const baseUrl = 'http://localhost:5000/api/games/'

const GamesService = {

    getGames() {
        return fetch(baseUrl)
        .then(res => res.json())
    },

    postGame(payload) {
        return fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteGame(id) {
        return fetch(baseUrl + id, {
            method: 'DELETE'
        })
    }

}

export default GamesService