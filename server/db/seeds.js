connect_four;
// db.dropDatabase();

db.scores.insertMany([
    {
        playerName: "One",
        playerWins: 10
    },
    {
        playerName: "Two",
        playerWins: 0
    }
])