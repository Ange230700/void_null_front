// src/app/items/items.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';
import type { Item } from '@/src/app/items/item.model';
import { environment } from '@/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private readonly baseUrl = environment.apiBaseUrl;

  private get itemsUrl(): string {
    return `${this.baseUrl}/items`;
  }

  async getAll(): Promise<Item[]> {
    const response = await axios.get<Item[]>(this.itemsUrl);
    return response.data;
  }

  async getById(id: number): Promise<Item> {
    const response = await axios.get<Item>(`${this.itemsUrl}/${id}`);
    return response.data;
  }

  async create(item: Item): Promise<Item> {
    const response = await axios.post<Item>(this.itemsUrl, item);
    return response.data;
  }

  async update(id: number, item: Partial<Item>): Promise<Item> {
    const response = await axios.patch<Item>(`${this.itemsUrl}/${id}`, item);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`${this.itemsUrl}/${id}`);
  }
}
