import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoggerService {

  constructor() { }

  log(){
    console.log("Writing this log");
  }
}

// scene is that i need the logger service only in dev env not in production so if i remove the providers in @injectable then it will throw null injectoe error so for that in whichever component i use the service i will use it with the optional decorator

