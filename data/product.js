import { faker } from "@faker-js/faker/locale/ko";

export const productData = () => {
    const list = [];

    for (let index = 0; index < 50; index++) {
        const categoryId = faker.number.int({ min: 1, max: 3 });

        list.push({
            id: index + 1,
            title: faker.commerce.productName(),
            price: faker.commerce.price({ min: 10000, max: 100000 }),
            discount: faker.number.int({ min: 0, max: 100 }),
            category_id: categoryId,
            sub_category_id: categoryId === 1 ? faker.number.int({ min: 1, max: 5 }) : null, // 
            description: faker.commerce.productDescription(),
            likes: faker.number.int({ min: 0, max: 100 }),
            images: []
        });
    }

    return list;    
}

export const productImageData = () => {
    const list = [];

    for (let index = 0; index < 100; index++) {
        list.push({
            id: index + 1,
            url: faker.image.urlLoremFlickr({ category: 'animal' }),
            product_id: faker.number.int({ min: 1, max: 50 })
        })
    }

    return list;
}