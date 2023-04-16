import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusDetailsComponent } from './create-bus-details/create-bus-details.component';
import { BusInfoComponent } from './bus-info/bus-info.component';
import { BusDetailsListComponent } from './bus-details-list/bus-details-list.component';
import { UpdateBusDetailsComponent } from './update-bus-details/update-bus-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';


const routes: Routes = [
  
  {path: 'busDetails', component: BusDetailsListComponent,canActivate:[AuthGaurdService] },
  {path: 'create-bus-details', component: CreateBusDetailsComponent ,canActivate:[AuthGaurdService] },
  {path: '', redirectTo: 'app-homepage', pathMatch: 'full'},
  {path: 'updateBusDetails/:busId', component: UpdateBusDetailsComponent,canActivate:[AuthGaurdService] },
  {path: 'busDetails/:busId', component:  BusInfoComponent,canActivate:[AuthGaurdService] },
  {path:'app-login-form',component: LoginFormComponent},
  {path:'app-registration-form',component:RegistrationFormComponent},
  {path:'app-homepage',component:HomepageComponent},
  {path:'app-contact-us',component:ContactUsComponent},
  {path:'app-feedback-form',component:FeedbackFormComponent},
  {path:'app-logout-form',component:LogoutFormComponent,canActivate:[AuthGaurdService]},
  {path:'app-profile-card',component:ProfileCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }