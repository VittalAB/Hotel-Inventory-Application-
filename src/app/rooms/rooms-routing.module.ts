import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { roomGuard } from './guards/room.guard';


const routes: Routes = [
{ path: 'rooms', component:RoomsComponent}, // this is the child route place one more route in the routing component .html
{path:"", redirectTo:'/login', pathMatch:'full'}, // this is the default route 
{path:"rooms/add", component:RoomsAddComponent, pathMatch:'full'},
{path : "rooms/:roomNumber", component: RoomsBookingComponent},
];


// const routes: Routes = [
// {path:"", component:RoomsComponent,
// children:[{path:"add", component:RoomsAddComponent}, {path:':roomNumber', component:RoomsBookingComponent}, ]}, // this is the child route place one more route in the routing component .html

// {path:"", redirectTo:'/rooms', pathMatch:'full'}, // this is the default route 
// {path : "rooms/:roomNumber", component: RoomsBookingComponent},
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
