// src/app/items/items.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';
import type { Item } from '@/src/app/items/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  // Point this at wherever your NestJS API is running:
  private readonly apiUrl = 'http://localhost:3000/items';

  async getAll(): Promise<Item[]> {
    const response = await axios.get<Item[]>(this.apiUrl);
    return response.data;
  }

  async getById(id: number): Promise<Item> {
    const response = await axios.get<Item>(`${this.apiUrl}/${id}`);
    return response.data;
  }

  async create(item: Item): Promise<Item> {
    const response = await axios.post<Item>(this.apiUrl, item);
    return response.data;
  }

  async update(id: number, item: Partial<Item>): Promise<Item> {
    const response = await axios.patch<Item>(`${this.apiUrl}/${id}`, item);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`${this.apiUrl}/${id}`);
  }
}
