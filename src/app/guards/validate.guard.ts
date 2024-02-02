import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';


export const validateGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state : RouterStateSnapshot) => {

  const flag = inject(LoginserviceService).isLoggedin;
  
 return flag;
};



// this is in updated version of angular 16 here 
// you need to just inject the service which implement the logic of filtering ...
