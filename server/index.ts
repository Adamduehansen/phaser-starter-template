import express from 'express';

const app = express();

app.get('/api/score', (_, reponse) => {
  reponse.status(200).json({
    scores: [0],
  });
});

app.listen(3001, function () {
  console.log('Server is listening on port 3001!\n');
});
