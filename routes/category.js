import express from 'express';
import { category, subCategory } from "../data/category.js";

export const categoryRouter = express.Router();
/**
 * 카테고리 리스트
*/
categoryRouter.get('/category', (req, res) => {
    return res.status(200).json(category);
})
/**
 * 서브 카테고리 리스트
*/
categoryRouter.get('/subCategory', (req, res) => {
    return res.status(200).json(subCategory);
})
/**
 * 메뉴 리스트
 */
categoryRouter.get('/categoryMenu', (req, res) => {
    let menu = [];
    
    category.map(((categoryData) => {
        categoryData.subCategory = []

        subCategory.map((subCategoryData) => {
            if(subCategoryData.id === categoryData.id){
                categoryData.subCategory.push(subCategoryData);
            }
        })

        menu.push(categoryData);
    }))
    
    return res.status(200).json(menu);
})