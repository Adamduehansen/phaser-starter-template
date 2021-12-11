import path from 'path';
import express from 'express';
import scoreRouter from './Routes/ScoreController';

const app = express();

app.use(express.static(path.join(__dirname, 'www')));

app.use('/api/score', scoreRouter);

app.listen(3001, function () {
  console.log('Server is listening on port 3001!\n');
});
