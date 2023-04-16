import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout-form',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.css']
})
export class LogoutFormComponent implements OnInit{
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router){

    }
     
    ngOnInit(){
      this.authenticationService.logOut();
      this.router.navigate(['login']);
      
    }
}

