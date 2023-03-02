import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationComponent } from './components/authentication/user-authentication/user-authentication.component';
import { BarCodeComponent } from './components/bar-code/bar-code.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const routes: Routes = [
  { path: '', redirectTo: '/bar-code', pathMatch: 'full'},
  { path: 'timeline', component: TimelineComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'authentication', component: UserAuthenticationComponent },
  { path: 'bar-code', component: BarCodeComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'bsff', loadChildren: () =>
      import('./components/bsff/bsff.module').then((s) => s.BsffModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule,],
  exports: [RouterModule],
})
export class AppRoutingModule {}
