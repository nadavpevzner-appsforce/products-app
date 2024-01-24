export interface Product {
  id: string;
  name: string;
  image: string;
  minPrice: number;
  description: string;
  info: string;
}

export type ProductWithoutId = Omit<Product, 'id'>;
