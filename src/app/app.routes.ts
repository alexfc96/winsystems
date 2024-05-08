import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list-heroes',
    loadComponent: () => import('./list-heroes/list-heroes.page').then((m) => m.ListHeroesPage),
  },
  {
    path: '',
    redirectTo: 'list-heroes',
    pathMatch: 'full',
  },
];
