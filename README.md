<!-- README.md -->

# VoidNull Frontend

A modern full-stack demo app built with Angular, PrimeNG, TailwindCSS, and a RESTful Node.js/NestJS backend. Manage your items inventory in style — with a focus on robust code quality, scalable patterns, and a sleek UI.

---

## Table of Contents

<!-- * [Demo](#demo) -->

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
  <!-- * [Contributing](#contributing) -->
  <!-- * [License](#license) -->
  <!-- * [Acknowledgements](#acknowledgements) -->
- [Contact](#contact)

<!-- ---

## Demo

> **Live Demo:** [VoidNull Frontend](https://void-null-front.onrender.com)
> **Backend API:** [VoidNull Backend](https://void-null-back.onrender.com)

![Screenshot](public/screenshot.png) Replace with a real screenshot or remove if not available -->

---

## Tech Stack

**Frontend:**

- Angular 20 (Standalone Components)
- PrimeNG (UI)
- TailwindCSS (utility-first styling)
- Axios

**Backend:**

> _Not in this repo, but see:_ > [void_null_back (Node.js/NestJS)](https://github.com/Ange230700/void_null_back)

**Dev Tools & Quality:**

- ESLint & Prettier (+ Prettier Tailwind plugin)
- Husky (git hooks), lint-staged, Commitlint (conventional commits)
- Jasmine/Karma (unit tests)
<!-- * GitHub Actions (CI/CD — optional) -->

---

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 9.x
- Backend API running (see [void_null_back](https://github.com/Ange230700/void_null_back))
<!-- * Docker (optional, for containerization) -->

### Installation

```bash
git clone https://github.com/Ange230700/void_null_front.git
cd void_null_front
npm install
```

---

## Running the Project

### Start the Frontend (Angular)

```bash
npm start
# or
ng serve
```

App runs at [http://localhost:4200](http://localhost:4200)

### Start the Backend

See instructions in [void_null_back](https://github.com/Ange230700/void_null_back).

---

## Project Structure

```bash
├── src/
│   ├── app/
│   │   ├── items/           # Item CRUD components & services
│   │   └── footer/          # Footer component
│   ├── environments/        # Environment configs (API URLs)
│   ├── assets/              # Static assets (logo, etc.)
│   └── styles.css           # Tailwind & PrimeNG styles
├── public/                  # Public static files (favicon, logo)
├── angular.json             # Angular CLI config
├── package.json             # Project metadata & scripts
├── tsconfig*.json           # TypeScript configs
└── README.md
```

---

## API Documentation

- All item operations use a RESTful backend.
- The Angular frontend expects a backend running at `http://localhost:3000` (dev) or [https://void-null-back.onrender.com](https://void-null-back.onrender.com) (prod).
- **Endpoints:**

  - `GET    /items` – List items
  - `GET    /items/:id` – Get item by ID
  - `POST   /items` – Create new item
  - `PATCH  /items/:id` – Update item
  - `DELETE /items/:id` – Delete item

> **Full API:** See [void_null_back API README](https://github.com/Ange230700/void_null_back)

---

## Testing

Run all unit tests with:

```bash
npm test
# or
ng test
```

Uses Jasmine + Karma for test running and reporting.

---

## Deployment

To build the production frontend:

```bash
npm run build
# or
ng build --configuration production
```

The output will be in the `dist/void-null` directory. Deploy to any static hosting (Vercel, Netlify, Render, etc).

> Backend deployment: see [void_null_back](https://github.com/Ange230700/void_null_back).

---

## Environment Variables

**Frontend:**
Configuration is handled via `src/environments/`:

- `environment.ts` (development):

  ```ts
  export const environment = {
    production: false,
    apiBaseUrl: "http://localhost:3000",
  };
  ```

- `environment.prod.ts` (production):

  ```ts
  export const environment = {
    production: true,
    apiBaseUrl: "https://void-null-back.onrender.com",
  };
  ```

**Backend:**
See [void_null_back README](https://github.com/Ange230700/void_null_back) for required `.env` setup.

<!-- ---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m "Add my feature"`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Pre-commit checks and formatting are enforced with Husky, lint-staged, Prettier, and ESLint. -->

<!-- ---

## License

MIT License -->

<!-- ---

## Acknowledgements

* [Angular](https://angular.dev/)
* [PrimeNG](https://primeng.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/) -->

---

## Contact

Ange KOUAKOU
[kouakouangeericstephane@gmail.com](mailto:kouakouangeericstephane@gmail.com)

- [Frontend Repo](https://github.com/Ange230700/void_null_front)
- [Backend Repo](https://github.com/Ange230700/void_null_back)
