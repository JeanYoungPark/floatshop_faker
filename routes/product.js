import express from "express";
import { productData, productImageData } from "../data/product.js";

export const productRouter = express.Router();

productRouter.post('/product', (req, res) => {
    const categoryId = parseInt(req.body.category_id);
    const subCategoryId = parseInt(req.body.sub_category_id);

    const products = productData().filter((product) => {
        if(subCategoryId){
            return product.category_id === categoryId && product.sub_category_id === subCategoryId;
        }else {
            return product.category_id === categoryId;
        }
    });

    const images = productImageData();
    const list = [];
    
    products.forEach(product => {
        images.forEach(image => {
            if(product.id === image.product_id) {
                !product.images.length && product.images.push(image)
            }
        })
        list.push(product);
    })

    return res.status(200).json(list);
})