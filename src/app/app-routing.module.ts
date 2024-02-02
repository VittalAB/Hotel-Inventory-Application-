import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { validateGuard } from './guards/validate.guard';
import { canLoadGuard } from './guards/can-load.guard';
// import { loginGuard } from './guards/login.guard';


// we want to secure employee and booking so place the login guard there

const routes: Routes = [
{ path : "employee", component : EmployeeComponent, canActivate:[validateGuard]},

 // default path or url 
{path:"404", component:NotfoundComponent},
{path:'login', component:LoginComponent},
{ path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), canMatch:[validateGuard]}, // lazy loaded module loaded when it is required 


// ng g m booking --route=booking --routing --module=app  =>  is the command 
 
{path:"**", redirectTo:'/404'}, // wildcard path if does not match any route 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
