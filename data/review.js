import { faker } from "@faker-js/faker/locale/ko";

export const reviewData = () => {
    const list = [];

    for (let index = 0; index < 50; index++) {

        list.push({
            id: index + 1,
            title: faker.lorem.sentence(),
            product_id: faker.number.int({ min: 1, max: 50 }), 
            content: faker.lorem.paragraphs({ min: 2, max: 10 }),
            user_id: faker.person.lastName(),
            images: faker.image.urlLoremFlickr({ category: 'person' }),
            reg_date: faker.date.anytime()
        });
    }

    return list;
}