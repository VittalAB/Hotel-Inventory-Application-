import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  email !: string;
  password !: string;


  constructor(private route : Router, private loginService : LoginserviceService){

  }
  login(){
    if(this.loginService.Login(this.email, this.password)){
      alert("login done...");
      // this.route.navigate(['/rooms', 'add']);
      this.route.navigateByUrl('rooms');
    }
  }
}
