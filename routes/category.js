import express from 'express';
import { categoryData, subCategoryData } from "../data/category.js";

export const categoryRouter = express.Router();
/**
 * 카테고리 리스트
*/
categoryRouter.get('/category', (req, res) => {
    return res.status(200).json(categoryData);
})
/**
 * 서브 카테고리 리스트
*/
categoryRouter.get('/subCategory', (req, res) => {
    return res.status(200).json(subCategoryData);
})
/**
 * 메뉴 리스트
 */
categoryRouter.get('/categoryMenu', (req, res) => {
    let menu = [];
    
    categoryData.map(((categoryData) => {
        categoryData.subCategory = []

        subCategoryData.map((subCategoryData) => {
            if(subCategoryData.id === categoryData.id){
                categoryData.subCategory.push(subCategoryData);
            }
        })

        menu.push(categoryData);
    }))
    
    return res.status(200).json(menu);
})