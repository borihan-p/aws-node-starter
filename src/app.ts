import cors from 'cors';
import express, { Express } from 'express';


const app: Express = express();


// Middlewares
app.use(cors());


// Routes
app.get('/', (req, res) => {
  res.json({ title: 'API Examples', gitHash: process.env.GIT_HASH });
});




export { app };