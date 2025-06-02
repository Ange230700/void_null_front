// src/app/items/items-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import type { Item } from './item.model';

// PrimeNG modules:
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

// Angular core
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './items-list.component.html',
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  loading = false;

  constructor(
    private readonly itemsService: ItemsService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.loadItems();
  }

  async loadItems() {
    this.loading = true;
    try {
      this.items = await this.itemsService.getAll();
    } catch (err) {
      console.error('Error loading items', err);
    } finally {
      this.loading = false;
    }
  }

  onCreate() {
    this.router.navigate(['/items/new']);
  }

  onEdit(item: Item) {
    this.router.navigate(['/items', item.id, 'edit']);
  }

  async onDelete(item: Item) {
    if (!item.id) {
      return;
    }
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
      try {
        await this.itemsService.delete(item.id);
        this.loadItems();
      } catch (err) {
        console.error('Error deleting item', err);
      }
    }
  }
}
