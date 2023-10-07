import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {QRCodeModule} from 'angularx-qrcode';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    QRCodeModule,
    NzCarouselModule,
  ]
})
export class HomeModule {
}
