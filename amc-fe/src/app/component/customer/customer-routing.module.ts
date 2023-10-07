import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../../core/guard/auth.guard';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {ROUTER_UTILS} from '@shared/utils/router.utils';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    canActivate: [AuthGuard],
    data: {
      authorities: ['organization:view'],
      title: 'model.customer.title'
    }
  },
  {
    path: ROUTER_UTILS.customer.create,
    component: CustomerUpdateComponent,
    canActivate: [AuthGuard],
    data: {
      authorities: ['organization:create'],
      title: 'model.customer.title'
    }
  },
  {
    path: ROUTER_UTILS.customer.update,
    component: CustomerUpdateComponent,
    canActivate: [AuthGuard],
    data: {
      authorities: ['organization:update'],
      title: 'model.customer.title'
    }
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
