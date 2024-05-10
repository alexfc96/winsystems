import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonNote } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeroeResult } from 'src/types';

@Component({
  standalone: true,
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  imports: [IonNote, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonNote, CommonModule, FormsModule]
})
export class HeroeDetailPage implements OnInit {
  private router: Router = inject(Router);
  selectedHeroe: HeroeResult | null | undefined = null;

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.selectedHeroe = state['heroe'] as HeroeResult;
    }
  }

}
