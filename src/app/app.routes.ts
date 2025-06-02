// src\app\app.routes.ts

import { Routes } from '@angular/router';
import { ItemsListComponent } from '@/src/app/items/items-list.component';
import { ItemFormComponent } from '@/src/app/items/item-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/new', component: ItemFormComponent },
  { path: 'items/:id/edit', component: ItemFormComponent },
  // (optionally) a 404 fallback:
  { path: '**', redirectTo: '/items' },
];
