import { faker } from "@faker-js/faker/locale/ko";

const category = () => {
    const list = [
        { id: 1, title: '의류' },
        { id: 2, title: '산책' },
        { id: 3, title: '리빙' }
    ];

    resizeBy.json({ category: list });
}

const sub_category = () => {
    
    const list = [
        '민소매, 나시',
        '티셔츠',
        '후드',
        '아우터',
        '악세사리'
    ]
}

const category_image = () => {
    faker.image.url(600, 600, '')
}