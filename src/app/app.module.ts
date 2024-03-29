import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './EmailValidator/email-validator.directive';
import { RoomsModule } from './rooms/rooms.module';

function initFactory(init : InitService){
  return ()=>
  init.init();
}

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,

    LoginComponent,
    HoverDirective,
    EmailValidatorDirective
  ],
  imports: [
    RoomsModule,  // always import feature modeule before app routing module 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  providers: [
    {
      provide : APP_SERVICE,
      useValue : APP_CONFIG,
    },{
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true
    },
    {
      provide : APP_INITIALIZER,
      useFactory : initFactory,
      deps : [InitService],
      multi  : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
