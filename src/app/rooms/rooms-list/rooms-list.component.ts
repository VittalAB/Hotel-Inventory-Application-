import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {List} from '../rooms';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
  //  return new object everytime i.e imumutable 
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{


  // it provides a view to apps-rooms-list selector 
  // where data is coming from some other component 

  
  @Input() rooms : List[] | null = [];

  @Input() title !: string;


  //  input recieves the data form the parent 

  @Output() selectedRoom = new EventEmitter<List>();

  // output sends the data to the parent

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes, "changes");

      if(changes['title']){
        console.log("Title property changed !!")

        this.title = changes['title'].currentValue.toUpperCase();

      }
  }

  selectRoom(room : List){

    this.selectedRoom.emit(room);
  }


  constructor(){

  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      console.log("Room list is destroyed")
  }
}
