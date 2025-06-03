// src\app\app.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@/src/app/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.html',
})
export class App {
  protected title = 'void_null';
}
