import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TranslateModule],
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);
  languages = ['es', 'en'];

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'es';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }
}
