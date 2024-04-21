import { Product } from './product.model';

export interface createProductDto extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'>{
  categoryId: string;
}

export interface updateProductDto extends Partial<createProductDto>{}

export interface findProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}
