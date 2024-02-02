import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  isLoggedin : boolean = false;

  constructor(private route : Router) { }

  Login(email:string, password:string){
    if(email==="a@a" && password==='123'){
      // alert("login done...");
      this.isLoggedin = true;

      // this.route.navigate(['/rooms', 'add']);
      // this.route.navigateByUrl('rooms/add');
  }

  console.log("is logged in : - ", this.isLoggedin);
  
 return this.isLoggedin;

}

}

