import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {Event, NavigationError, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LocalStorageService} from 'ngx-webstorage';

import {LANGUAGE_VI} from './shared/constants/base.constant';
import {LOCAL_STORAGE} from './shared/constants/local-session-cookies.constants';
import {LoadingService} from './shared/service/helpers/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  currentUrl = '';
  defaultLanguage: string = LANGUAGE_VI;

  constructor(
    public router: Router,
    public loadingService: LoadingService,
    protected localStorage: LocalStorageService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {
    const self = this;
    this.router.events.subscribe((routerEvent: Event) => {
      let language = self.localStorage.retrieve('language');
      if (!language) {
        language = self.defaultLanguage;
        self.localStorage.store(LOCAL_STORAGE.LANGUAGE, self.defaultLanguage);
      }
      self.setLanguage(language);

      if (routerEvent instanceof NavigationStart) {
        self.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
      }

      if (routerEvent instanceof NavigationError && routerEvent.error.status === 404) {
        this.router.navigate(['/404']);
      }

      window.scrollTo(0, 0);
    });
  }

  setLanguage(language: string): void {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

}
