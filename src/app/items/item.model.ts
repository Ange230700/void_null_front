// src/app/items/item.model.ts

export interface Item {
  id?: number;
  name: string;
  description?: string;
  price: string;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}
