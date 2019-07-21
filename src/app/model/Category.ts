import {Product} from './Product';

export class Category {

  id?: number;
  name: string;
  miniature: string;
  products: Product[];

  constructor() {
  }
}
