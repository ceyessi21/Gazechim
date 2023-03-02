import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

// import { AuthenticationModule } from './components/authentication/authentication.module';
import { BarCodeComponent } from './components/bar-code/bar-code.component';
import { FormsModule } from '@angular/forms';
import { UserAuthenticationComponent } from './components/authentication/user-authentication/user-authentication.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TimelineComponent } from './components/timeline/timeline.component';
@NgModule({
  declarations: [
    AppComponent,
    BarCodeComponent,
    UserAuthenticationComponent,
    NotificationComponent,
    ToggleComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthenticationModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
