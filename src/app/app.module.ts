import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AppComponent,
    CreateBusDetailsComponent,
    BusInfoComponent,
    BusDetailsListComponent,
    UpdateBusDetailsComponent,
    LoginFormComponent,
    HomepageComponent,
    ContactUsComponent,
    FeedbackFormComponent,
    LogoutFormComponent,
    ProfileCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }