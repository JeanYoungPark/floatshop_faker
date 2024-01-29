import express from "express";
import { getReviews } from "../myModule/dataModule";

export const reviewRouter = express.Router();
const reviews = getReviews();

reviewRouter.post('/review', (req, res) => {
    const productId = parseInt(req.body.productId);

    const list = reviews.filter((reviews) => {
        return reviews.id === productId;
    })

    return res.status(200).json(list);
})