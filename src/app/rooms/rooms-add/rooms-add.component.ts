import { Component } from '@angular/core';
import { List } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {

  room : List = {
    roomType : '',
    roomNumber : '',
    amenities : '',
    checkinTime : new Date(),
    checkoutTime : new Date(),
    photos : '',
    price : 0
  }

  xemail : string = '';

  successMsg = "";

  constructor(private roomService : RoomsService){

  }

  AddRoom(roomsForm : NgForm){
    this.roomService
    .addRoom(this.room)
    .subscribe((d)=>{
      console.log(d);
      this.successMsg = "Added room successfully re baba ... !";
      roomsForm.reset();


      // roomsForm.valueChanges?.subscribe((d)=>{
      //   console.log(d)
    
      // })



    })
  }

}
