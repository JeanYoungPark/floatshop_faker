import { faker } from "@faker-js/faker/locale/ko";


export const category = [
    { id: 1, title: '의류' },
    { id: 2, title: '산책' },
    { id: 3, title: '리빙' } 
]

export const subCategory = [
    { category_id: 1, title: '민소매, 나시', id: 1 },
    { category_id: 2, title: '티셔츠', id: 1 },
    { category_id: 3, title: '후드', id: 1 },
    { category_id: 4, title: '아우터', id: 1 },
    { category_id: 5, title: '악세사리', id: 1 }
]

const category_image = () => {
    faker.image.url(600, 600, '')
}