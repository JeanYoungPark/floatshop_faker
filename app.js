import express from 'express';
import { app } from './index.js';
import { categoryRouter } from './routes/category.js';
import { productRouter } from './routes/product.js';

const api = express.Router();

app.use(express.json());
app.use("/api", api);
api.use(categoryRouter);
api.use(productRouter);
