import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonHeader, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-list-heroes',
  templateUrl: 'list-heroes.page.html',
  styleUrls: ['list-heroes.page.scss'],
  imports: [CommonModule, IonHeader, IonItem, IonLabel, IonToolbar, IonTitle, IonContent, IonList, IonThumbnail, RouterLink ],
})
export class ListHeroesPage {
  private router: Router = inject(Router);

  marvelMovies = [
    { id: 1, name: 'Iron Man', imageUrl: 'https://example.com/iron-man.jpg' },
    { id: 2, name: 'Captain America', imageUrl: 'https://example.com/captain-america.jpg' },
    { id: 3, name: 'Thor', imageUrl: 'https://example.com/thor.jpg' },
    { id: 4, name: 'Black Widow', imageUrl: 'https://example.com/black-widow.jpg' },
    { id: 5, name: 'Guardians of the Galaxy', imageUrl: 'https://example.com/guardians.jpg' },
  ];

  navigateToHeroeDetail(id: number) {
    this.router.navigate(['/heroe-detail', id]); // Navigate to HeroeDetailPage
  }
}
