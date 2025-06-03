// src/app/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="w-full bg-[var(--p-surface-900)] py-4 text-center">
      <p class="mb-1">
        Frontend:
        <a
          href="https://github.com/Ange230700/void_null_front"
          target="_blank"
          rel="noopener"
          class="underline hover:text-[var(--p-button-primary-background)]"
        >
          github.com/Ange230700/void_null_front
        </a>
      </p>
      <p>
        Backend:
        <a
          href="https://github.com/Ange230700/void_null_back"
          target="_blank"
          rel="noopener"
          class="underline hover:text-[var(--p-button-primary-background)]"
        >
          github.com/Ange230700/void_null_back
        </a>
      </p>
    </footer>
  `,
})
export class FooterComponent {}
