import { Router } from 'express';
import User from './app/models/User';

const routes = new Router(); // utilizando Router

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alef de Melo Pires',
    email: 'alef.m.pires@gmail.com',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
