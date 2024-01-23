import express from 'express';
import { app } from './index.js';
import { categoryRouter } from './routes/category.js';

const api = express.Router();

app.use(express.json());
app.use("/api", api);
api.use(categoryRouter)
