import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  // creating the intereptor will add the headers to all the request made in angular 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    // we cant modify the headers directly so clone it and do the changes and send in the handle 

    if (request.method == "POST") {
      const new_req = request.clone({ headers: new HttpHeaders({ "MykeyToken": "Value @123" }) });

      return next.handle(new_req);
    }
    else {
      return next.handle(request);
    }
  }
}
