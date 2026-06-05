# DynamicNestedSidemwnu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy to firebase
npm install -g firebase-tools@9.23.0
firebase login
firebase init

## Architecture Overview

This repository is organized as a knowledge hub with one Angular app and multiple
domain-focused feature areas.

### High-level structure

- `src/app/app-routing.module.ts`: top-level lazy-loaded domains (`angular`, `csharp`, `dotnetcore`, `efcore`, `message-broker`, `micro-fe`).
- `src/app/layout/fragments/`: shared shell (`MainShellComponent`) + sidebar/header/footer.
- `src/assets/menu.ts`: central menu tree used by the shell to render navigation.

### Angular domain structure

The Angular domain is now split into topic modules to keep feature growth manageable:

- `src/app/components/angular/angular-common-concepts.module.ts`
- `src/app/components/angular/angular-rxjs.module.ts`
- `src/app/components/angular/angular-router-concepts.module.ts`
- `src/app/components/angular/angular-forms.module.ts`
- `src/app/components/angular/angular-ngrx.module.ts`
- shared imports: `src/app/components/angular/angular-shared-feature.module.ts`

Routing is grouped by topic:

- `src/app/components/angular/routes/common-concepts.routes.ts`
- `src/app/components/angular/routes/rxjs.routes.ts`
- `src/app/components/angular/routes/router.routes.ts`
- `src/app/components/angular/routes/forms.routes.ts`
- `src/app/components/angular/routes/ngrx.routes.ts`

### Conventions

- Menu state is route-driven via `data.menuKey` on top-level routes.
- Menu model is strongly typed with recursive nodes in `src/app/core/interface/IMenu.ts`.
- Slugs are normalized with backward-compatible redirects in Angular routes
	(for example typo fixes such as `ngrx-store-intall` -> `ngrx-store-install`).