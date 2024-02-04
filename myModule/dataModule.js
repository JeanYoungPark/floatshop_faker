import { categoryData, subCategoryData } from "../data/category.js";
import { eventData } from "../data/event.js";
import { productData, productImageData } from "../data/product.js";
import { reviewData } from "../data/review.js";

let categories = null;
let subCategories = null;

let products = null;
let productImages = null;

let reviews = null;

let events = null;

export const initializeData = () => {
    categories = categoryData;
    subCategories = subCategoryData;

    products = productData();
    productImages = productImageData();

    reviews = reviewData();

    events = eventData();
}

export const getCategories = () => { return categories; }
export const getSubCategories = () => { return subCategories; }

export const getProducts = () => { return products; }
export const getProductImages = () => { return productImages; }

export const getReviews = () => { return reviews; }

export const getEvents = () => { return events; }