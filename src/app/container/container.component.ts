import { AfterContentInit, Component, ContentChild, Host, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  // providers:[RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChild(EmployeeComponent) emp !: EmployeeComponent;


  ngAfterContentInit(): void {
    console.log(this.emp)
      this.emp.empName = "Vittal"
  }

  constructor(){
    // console.log(this.rooms.getRooms());
  }

   

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      console.log("I am destroyed")
  }

}
