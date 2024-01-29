import { faker } from "@faker-js/faker/locale/ko";

export const reviewData = () => {
    const list = [];

    for (let index = 0; index < 50; index++) {

        list.push({
            id: index + 1,
            title: faker.lorem.sentence(),
            product_id: faker.number.int({ min: 1, max: 100 }), 
            content: faker.lorem.paragraphs({ min: 10, max: 100 }),
            user_id: faker.person.lastName(),
            images: faker.image.urlLoremFlickr({ category: 'person' }),
        });
    }

    return list;
}