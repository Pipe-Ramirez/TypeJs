type Sizes = 'S' | 'M' | 'L';
type User = string | number;

interface Product {
  id: string | number;
  title: string;
  creatAt: string;
  stock: number;
  size?: Sizes;
}

const product: Product[] = [];
