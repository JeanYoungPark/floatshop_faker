import { faker } from "@faker-js/faker/locale/ko";

export const product = () => {
    const list = [];

    for (let index = 0; index < 50; index++) {
        const categoryId = faker.number.int({ min: 1, max: 3 });

        list.push({
            id: index + 1,
            title: faker.commerce.productName(),
            price: faker.commerce.price({ min: 10000, max: 100000 }),
            category_id: categoryId,
            sub_category_id: categoryId === 1 ? faker.number.int({ min: 1, max: 5 }) : null, // 
            description: faker.commerce.productDescription(),
            images: []
        });
    }

    return list;    
}

export const productImage = () => {
    const list = [];

    for (let index = 0; index < 50; index++) {
        list.push({
            id: index + 1,
            url: faker.image.urlLoremFlickr({ category: 'fashion' }),
            product_id: faker.number.int({ min: 1, max: 50 })
        })
    }

    return list;
}