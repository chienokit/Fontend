import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemReportComponent} from './system-report/system-report.component';
import {AuthGuard} from '../../core/guard/auth.guard';
const routes: Routes = [{
  path: '',
  component: SystemReportComponent,
  canActivate: [AuthGuard],
  data: {
    authorities: ['ticket:report'],
    title: 'sidebar.report'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
