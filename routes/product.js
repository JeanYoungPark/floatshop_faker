import express from "express";
import { getProductImages, getProducts, getReviews } from "../myModule/dataModule.js";

export const productRouter = express.Router();
const products = getProducts();
const productImages = getProductImages();
const reviews = getReviews();

productRouter.post('/product', (req, res) => {
    const productId = parseInt(req.body.product_id);
    const product = products.find((product) => product.id === productId);

    productImages.forEach(image => {
        if(productId === image.product_id) {
            product.images.push(image)
        }
    })

    const reviewList = reviews.filter(review => {
        return productId === review.product_id
    })

    product.reviews = reviewList;
    console.log(product);
    return res.status(200).json(product);
})

productRouter.post('/product/list', (req, res) => {
    const categoryId = parseInt(req.body.category_id);
    const subCategoryId = parseInt(req.body.sub_category_id);
    
    const productList = products.filter((product) => {
        if(subCategoryId){
            return product.category_id === categoryId && product.sub_category_id === subCategoryId;
        }else {
            return product.category_id === categoryId;
        }
    });
    
    const list = [];
    
    productList.forEach(product => {
        productImages.forEach(image => {
            if(product.id === image.product_id) {
                !product.images.length && product.images.push(image)
            }
        })

        const reviewList = reviews.filter(review => {
            return product.id === review.product_id
        })
        
        product.review_cnt = reviewList.length;
        list.push(product);
    })
    
    return res.status(200).json(list);
})