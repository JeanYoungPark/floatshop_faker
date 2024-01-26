import { categoryData, subCategoryData } from "../data/category.js";
import { productData, productImageData } from "../data/product.js";

let categories = null;
let subCategories = null;

let products = null;
let productImages = null;

export const initializeData = () => {
    categories = categoryData;
    subCategories = subCategoryData;

    products = productData();
    productImages = productImageData();
}

export const getCategories = () => { return categories; }
export const getSubCategories = () => { return subCategories; }

export const getProducts = () => { return products; }
export const getProductImages = () => { return productImages; }