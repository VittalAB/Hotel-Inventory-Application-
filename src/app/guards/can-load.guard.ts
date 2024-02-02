import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  return inject(LoginserviceService).isLoggedin;
};
