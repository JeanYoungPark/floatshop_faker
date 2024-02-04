import { faker } from "@faker-js/faker/locale/ko";

export const eventData = () => {
    const list = [];

    for (let index = 0; index < 10; index++) {

        list.push({
            id: index + 1,
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraphs({ min: 2, max: 10 }),
            images: faker.image.urlLoremFlickr({ category: 'event' }),
            reg_date: faker.date.anytime()
        });
    }

    return list;
}