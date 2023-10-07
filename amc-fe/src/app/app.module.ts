import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd/i18n';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {LoadingInterceptor} from './core/interceptor/loading.interceptor';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {IconDefinition} from '@ant-design/icons-angular';
import {ErrorInterceptor} from './core/interceptor/error.interceptor';
import {JwtInterceptor} from './core/interceptor/jwt.interceptor';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {LayoutModule} from './layout/layout.module';
import {NzFormModule} from 'ng-zorro-antd/form';
import {FormsModule} from '@angular/forms';
import {IconsProviderModule} from './icons-provider.module';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NgModule} from '@angular/core';
import {NZ_CONFIG} from 'ng-zorro-antd/core/config';
import {NzSpinModule} from 'ng-zorro-antd/spin';

registerLocaleData(vi);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        NgbModule,
        LayoutModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            useDefaultLang: true,
        }),
        NgxWebstorageModule.forRoot({prefix: '', separator: ''}),
        IconsProviderModule,
        FormsModule,
        NzLayoutModule,
        NzFormModule,
        NzMenuModule,
        NzSpinModule,
    ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: NZ_I18N, useValue: vi_VN},
    {provide: NZ_ICONS, useValue: icons},
    {
      provide: NZ_CONFIG, useValue: {
        notification: {
          nzMaxStack: 5,
          nzDuration: 3000,
          nzPauseOnHover: false,
          nzPlacement: 'topRight',
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}
