import { faker } from "@faker-js/faker/locale/ko";

export const category = () => {
    const list = [
        { id: 1, title: '의류' },
        { id: 2, title: '산책' },
        { id: 3, title: '리빙' }
    ];

    return resizeBy.json({ category: list });
}

const sub_category = () => {
    const list = [
        {id: 1, title: '민소매, 나시'},
        {id: 2, title: '티셔츠'},
        {id: 3, title: '후드'},
        {id: 4, title: '아우터'},
        {id: 5, title: '악세사리'}
    ]

    list.map((data) => {
        console.log(data);
    });
}

const category_image = () => {
    faker.image.url(600, 600, '')
}