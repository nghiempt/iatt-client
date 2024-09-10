export interface Product {
  id?: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  imageUrl: string;
  newLabel?: string;
}
