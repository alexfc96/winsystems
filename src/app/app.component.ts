import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private translateService = inject(TranslateService);
  languages = ['es', 'en'];

  ngOnInit(): void {
    // Get the browser language
    const browserLang = this.translateService.getBrowserLang();
    const defaultLang = browserLang ?? 'es'; // Use browser lang as default or spanish lang

    // Set the default language and use it
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }
}
