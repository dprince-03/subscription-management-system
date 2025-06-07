import { Router } from 'express';
import authorize from '../middlewares/auth.middlewares.js'
import { createSubscription, getUserSubscription }from '../controllers/subscription.controllers.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({
    title: 'Get all subscription',
  });
});

subscriptionRouter.get('/:id', (req, res) => {
  res.send({
    title: 'Get user subscriptions',
  });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
  res.send({
    title: 'Update user subscription',
  });
});

subscriptionRouter.delete('/:id', (req, res) => {
  res.send({
    title: 'Delete user subscription',
  });
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({
    title: 'Cancel user subscription',
  });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({
    title: 'Get upcoming subscription renewals',
  });
});

export default subscriptionRouter;
