import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonNote, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeroeResult } from 'src/types';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  imports: [IonBackButton, IonNote, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonNote, IonButtons, CommonModule, FormsModule, TranslateModule]
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

  goBack() {
    this.router.navigateByUrl('/list-heroes');
  }
}
