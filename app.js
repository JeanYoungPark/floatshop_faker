import express from 'express';
import { app } from '.';
import { categoryRouter } from './routes/category';

const api = express.Router();

app.use("/api", api);
api.use(categoryRouter)
