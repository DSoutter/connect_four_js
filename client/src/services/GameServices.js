const baseGameUrl = 'http://localhost:5000/api/games/'
const baseScoreUrl = 'http://localhost:5000/api/scores/'

const GamesService = {

    getGames() {
        return fetch(baseGameUrl)
        .then(res => res.json())
    },

    postGame(payload) {
        return fetch(baseGameUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteGame(id) {
        return fetch(baseGameUrl + id, {
            method: 'DELETE'
        })
    },

    // had to add in Scores to get scores collection

    getScores() {
        return fetch(baseScoreUrl)
        .then(res => res.json())
    },

    postScores(payload) {
        return fetch(baseScoreUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteScores(id) {
        return fetch(baseScoreUrl + id, {
            method: 'DELETE'
        })
    }



    
}

export default GamesService