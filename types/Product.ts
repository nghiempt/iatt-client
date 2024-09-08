export interface Product {
  id?: number; // id can also be optional if not used
  name: string;
  description: string;
  price: string;
  originalPrice?: string; // Optional, not all products have an original price
  discount?: string;      // Optional, not all products have a discount
  imageUrl: string;
  newLabel?: string;      // Optional, not all products have a new label
}
