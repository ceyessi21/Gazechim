import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonSegment, IonSegmentButton } from '@ionic/angular';

// import { AuthenticationModule } from './components/authentication/authentication.module';
import { BarCodeComponent } from './components/bar-code/bar-code.component';
import { UserAuthenticationComponent } from './components/authentication/user-authentication/user-authentication.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ObjectInfoComponent } from './components/object-info/object-info.component';
import { DetailBordereauComponent } from './components/detail-bordereau/detail-bordereau.component';
import { LoadpageComponent } from './components/loadpage/loadpage.component';
import { RegletteComponent } from './components/reglette/reglette.component';
import { RegletteSvgComponent } from './components/reglette-svg/reglette-svg.component';
import { CalculatorFillersComponent } from './components/calculator-fillers/calculator-fillers.component';
import { ApplicationComponent } from './components/application/application.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MessageService } from 'primeng/api';
import { MessageModule} from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './components/category/category.component';
import { ClassComponent } from './components/class/class.component';
import { MatDividerModule } from '@angular/material/divider';
import { SystemComponent } from './components/system/system.component';
import { ResultComponent } from './components/result/result.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    AppComponent,
    BarCodeComponent,
    UserAuthenticationComponent,
    NotificationComponent,
    ToggleComponent,
    TimelineComponent,
    ObjectInfoComponent,
    DetailBordereauComponent,
    LoadpageComponent,
    RegletteComponent,
    RegletteSvgComponent,
    CalculatorFillersComponent,
    ApplicationComponent,
    CategoryComponent,
    ClassComponent,
    SystemComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonToggleModule,
    // AuthenticationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    IonicModule.forRoot(),
    IonicModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
