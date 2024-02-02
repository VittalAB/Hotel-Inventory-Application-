import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers:[RoomsService]

  // register here in local component for having 
  // local instance that  is separate instance of the service for this compnnent

})
export class EmployeeComponent {

  empName : string = "John";

  constructor(private RoomService : RoomsService){
  // constructor(@Self() private RoomService : RoomsService){
    
  }
}
