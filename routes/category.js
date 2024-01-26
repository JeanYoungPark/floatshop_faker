import express from 'express';
import { getCategories, getSubCategories } from '../myModule/dataModule.js';

export const categoryRouter = express.Router();
const categories = getCategories();
const subCategories = getSubCategories();

/**
 * 카테고리 리스트
*/
categoryRouter.get('/category', (req, res) => {
    return res.status(200).json(categories);
})
/**
 * 서브 카테고리 리스트
*/
categoryRouter.get('/subCategory', (req, res) => {
    return res.status(200).json(subCategories);
})
/**
 * 메뉴 리스트
 */
categoryRouter.get('/categoryMenu', (req, res) => {
    let menu = [];
    
    categories.map(((categoryData) => {
        categoryData.subCategory = []

        subCategories.map((subCategoryData) => {
            if(subCategoryData.category_id === categoryData.id){
                categoryData.subCategory.push(subCategoryData);
            }
        })

        menu.push(categoryData);
    }))
    
    return res.status(200).json(menu);
})