import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list-heroes',
    loadComponent: () => import('./list-heroes/list-heroes.page').then((m) => m.ListHeroesPage),
  },
  {
    path: 'heroe-detail/:id',
    loadComponent: () => import('./heroe-detail/heroe-detail.page').then((m) => m.HeroeDetailPage),
  },
  {
    path: '',
    redirectTo: 'list-heroes',
    pathMatch: 'full',
  },
];
