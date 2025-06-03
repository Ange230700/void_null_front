// src/app/items/item-form.component.ts

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ItemsService } from '@/src/app/items/items.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import type { Item } from '@/src/app/items/item.model';

// PrimeNG modules:
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

// Angular core
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    CheckboxModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './item-form.component.html',
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;
  isEdit = false;
  itemId?: number;
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly itemsService: ItemsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      inStock: [true],
    });
  }

  ngOnInit() {
    // Check if there's an :id param → if yes, we’re in “edit” mode
    this.route.paramMap.subscribe(async (params) => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEdit = true;
        this.itemId = +idParam;
        this.loading = true;
        try {
          const item = await this.itemsService.getById(this.itemId);
          this.itemForm.patchValue({
            name: item.name,
            description: item.description,
            price: item.price,
            inStock: item.inStock,
          });
        } catch (err) {
          console.error('Error fetching item', err);
        } finally {
          this.loading = false;
        }
      }
    });
  }

  async onSubmit() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formValue = this.itemForm.value as Item;

    try {
      if (this.isEdit && this.itemId) {
        await this.itemsService.update(this.itemId, formValue);
      } else {
        await this.itemsService.create(formValue);
      }
      this.router.navigate(['/items']);
    } catch (err) {
      console.error('Error saving item', err);
    } finally {
      this.loading = false;
    }
  }

  onCancel() {
    this.router.navigate(['/items']);
  }
}
