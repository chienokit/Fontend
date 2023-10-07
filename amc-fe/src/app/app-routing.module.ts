import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page403Component} from '@authentication/page403/page403.component';
import {Page404Component} from '@authentication/page404/page404.component';
import {AuthLayoutComponent} from '@layout/app-layout/auth-layout/auth-layout.component';
import {MainLayoutComponent} from '@layout/app-layout/main-layout/main-layout.component';
import {ROUTER_UTILS} from '@shared/utils/router.utils';

const routes: Routes = [
  {
    path: ROUTER_UTILS.base.home,
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/' + ROUTER_UTILS.base.dashboard, pathMatch: 'full', data: {pageTitle: 'common.title'}},
      {
        path: ROUTER_UTILS.base.dashboard,
        loadChildren: () =>
          import('./component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: ROUTER_UTILS.ticket.root,
        loadChildren: () =>
          import('./component/ticket/ticket.module').then((m) => m.TicketModule),
      },
      {
        path: ROUTER_UTILS.complaint.root,
        loadChildren: () =>
          import('./component/complaint/complaint.module').then((m) => m.ComplaintModule),
      },
      {
        path: ROUTER_UTILS.survey.root,
        loadChildren: () =>
          import('./component/survey/survey.module').then((m) => m.SurveyModule),
      },
      {
        path: ROUTER_UTILS.building.root,
        loadChildren: () =>
          import('./component/building/building.module').then((m) => m.BuildingModule),
      },
      {
        path: ROUTER_UTILS.partnerContract.root,
        loadChildren: () =>
          import('./component/partner-contract/partner-contract.module').then((m) => m.PartnerContractModule),
      },
      {
        path: ROUTER_UTILS.customer.root,
        loadChildren: () =>
          import('./component/customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: ROUTER_UTILS.notification.root,
        loadChildren: () =>
          import('./component/notification/notification.module').then((m) => m.NotificationModule),
      },
      {
        path: ROUTER_UTILS.setting.root,
        loadChildren: () =>
          import('./component/setting/setting.module').then((m) => m.SettingModule),
      },
      // {
      //   path: 'survey',
      //   loadChildren: () =>
      //     import('./component/survey/survey.module').then((m) => m.SurveyModule),
      // },
      {
        path: ROUTER_UTILS.report.root,
        loadChildren: () =>
          import('./component/report/report.module').then((m) => m.ReportModule),
      },
      {path: ROUTER_UTILS.error.permissionDenied, component: Page403Component}
    ],
  },
  {
    path: ROUTER_UTILS.home.root,
    component: AuthLayoutComponent,
    loadChildren: () => import('./component/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ROUTER_UTILS.authentication.root,
    component: AuthLayoutComponent,
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: ROUTER_UTILS.privacyPolicy.root,
    component: AuthLayoutComponent,
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule),
  },
  {
    path: ROUTER_UTILS.feedback.public,
    component: AuthLayoutComponent,
    loadChildren: () => import('./feedback-public/feedback-public.module').then((m) => m.FeedbackPublicModule),
  },
  {path: ROUTER_UTILS.error.permissionDenied, component: Page403Component},
  {path: ROUTER_UTILS.error.notFound, component: Page404Component},
  {path: ROUTER_UTILS.base.freeRoute, component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
