import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonHeader, IonThumbnail } from '@ionic/angular/standalone';
import { ApiMarvelService } from '../api/api-marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroeResult } from 'src/types';
@Component({
  standalone: true,
  selector: 'app-list-heroes',
  templateUrl: 'list-heroes.page.html',
  styleUrls: ['list-heroes.page.scss'],
  providers: [ApiMarvelService],
  imports: [CommonModule, IonHeader, IonItem, IonLabel, IonToolbar, IonTitle, IonContent, IonList, IonThumbnail, RouterLink, HttpClientModule],
})
export class ListHeroesPage implements OnInit{
  private router: Router = inject(Router);
  private apiMarvelService = inject(ApiMarvelService)

  marvelHeroes$: Observable<HeroeResult[]> = new Observable<HeroeResult[]>();

  ngOnInit(): void {
    this.getMarvelHeroes();
  }

  getMarvelHeroes() {
    this.marvelHeroes$ = this.apiMarvelService.getAllSuperheroes();
    this.marvelHeroes$.subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error('Error obteniendo superhéroes:', error);
    });
  }

  navigateToHeroeDetail(id: number) {
    this.router.navigate(['/heroe-detail', id]); // Navigate to HeroeDetailPage
  }
}
