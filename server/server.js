const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('connect_four');
  const gamesCollection = db.collection('games');
  const scoresCollection = db.collection('scores');
  const gamesRouter = createRouter(gamesCollection);
  const scoresRouter = createRouter(scoresCollection);
  app.use('/api/games', gamesRouter);
  app.use('/api/scores', scoresRouter)

  app.listen(5000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
 
// URL: http://localhost:5000/api/games