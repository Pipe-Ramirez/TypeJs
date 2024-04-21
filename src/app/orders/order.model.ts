import { Product } from './../product/product.model';
import { User } from './../user/user.model';
import { BaseModel} from './../../base.model';

export interface Order extends BaseModel{
  product: Product[];
  user: User;
}
