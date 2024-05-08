import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.page.html',
  styleUrls: ['./heroe-detail.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeroeDetailPage implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  heroeId: number| null = null;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id'); // Access 'id' parameter
      if (id) {
        this.heroeId = Number(id); // Convert string to number
      }
    });
  }

}
