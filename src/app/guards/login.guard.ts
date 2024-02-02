// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../login/loginservice.service';
 // Import your LoginService

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {
  constructor(private loginService: LoginserviceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.loginService.isLoggedin ? true : this.router.navigate(['login']);

  }
}


//  above mentioned logic is deprecated .... in angular 16
