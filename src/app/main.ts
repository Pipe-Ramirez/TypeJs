import { faker} from '@faker-js/faker'

import {addProduct, products } from './product/product.service';
import { Product } from './product/product.model';

for (let index = 0; index < 5; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    stock: faker.number.int({min:10, max:50}),
    size: faker.helpers.arrayElement(['M','L','XL']),
    isNew: true,
    tags: faker.helpers.arrayElements([]),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);
