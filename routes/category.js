import express from 'express';
import { category } from "../data/category";

export const categoryRouter = express.Router();
/**
 * 카테고리 리스트
*/
categoryRouter.get('/category', (req, res) => {
    console.log(11111111);
    // return res.status(200).json(category);
})