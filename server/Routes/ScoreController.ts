import Router from 'express';

const scoreRouter = Router();

scoreRouter.get('/', (_, reponse) => {
  reponse.status(200).json({
    scores: [0, 100],
  });
});

export default scoreRouter;
