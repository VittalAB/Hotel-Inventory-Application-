import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnDestroy, SkipSelf } from '@angular/core';
import { List, Room } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy{
  

    constructor(@SkipSelf() private roomsService : RoomsService, private config : ConfigService){

    }



    subscription !: Subscription;


    errorStream$ : Subject<string> = new Subject<string>();

    getError$ = this.errorStream$.asObservable();

    rooms$ = this.roomsService.getRooms$.pipe(
      catchError((err)=>{
        // rxjs operator catchError
        // console.log(err);
        
        this.errorStream$.next(err.message);

        return of([]);
      })
    );

    roomsCount$ = this.roomsService.getRooms$.pipe(
      map((rooms) => rooms.length)
      // rxjs operator map 
    )
    



    roomlist : List [] = []


    stream = new Observable<string>(obs => {
        obs.next('user1');
        obs.next('user2');
        obs.next('user3');
        obs.next('user4');

        obs.complete();

    });

    // @ViewChild(HeaderComponent) headerComp!: HeaderComponent; // use this for single component
 
    // @ViewChildren(HeaderComponent) headerChildren! : QueryList<HeaderComponent>;

    // the above will return multiple instances of the header component 

    ngOnDestroy(): void {
        console.log("Destroyed ...");

        if(this.subscription){
          this.subscription.unsubscribe;
        }
    }

    
    totalByte = 0;

    ngOnInit(){

      this.roomsService.getPhotos().subscribe((event)=>{
        // console.log(event);
        switch (event.type) {
          case HttpEventType.Sent:
            console.log("REQUESTED MADE ")
            break;
          case HttpEventType.ResponseHeader :
            console.log("Success");
            break;
          case HttpEventType.DownloadProgress :
            this.totalByte+= event.loaded;
            console.log(`Loaded : ${this.totalByte/1000}`)
            break
          case HttpEventType.Response :
            console.log(event.body)
            break;

          default:
            break;
        }
      })




      this.stream.subscribe({
        next : (val) => console.log(val),
        complete : () => console.log("complete"),
        error : (err) => console.log(err),
      });





      this.stream.subscribe((data)=> console.log(data));



      // console.log(this.headerComp);
      
      // console.log(this.roomsService.getRooms());

      //  this.roomsService.getRooms$.subscribe(rooms =>{
      //   this.roomlist = rooms;
      // })


      // this.roomsService.getRooms().subscribe(rooms => {
      //   this.roomlist = rooms;
      // });

      // this.roomlist = [
      //   {
      //     rooomType : "Deluxe",
      //     amenities : "AC,fridge, kala katta",
      //     price : 500,
      //     image : "url",
      //     checkin : new Date('11-Nov-2021'),
      //     checkout : new Date('15-Nov-2021')
      //   },
      //   {
      //     rooomType : "Deluxe1",
      //     amenities : "AC,fridge",
      //     price : 5040,
      //     image : "url",
      //     checkin : new Date('11-Nov-2021'),
      //     checkout : new Date('15-Nov-2021')
      //   },
      //   {
      //     rooomType : "Deluxe2",
      //     amenities : "AC,fridge",
      //     price : 5001,
      //     image : "url",
      //     checkin : new Date('11-Nov-2021'),
      //     checkout : new Date('15-Nov-2021')
      //   },
      //   {
      //     rooomType : "Deluxe3",
      //     amenities : "AC,fridge",
      //     price : 5000,
      //     image : "url",
      //     checkin : new Date('11-Nov-2021'),
      //     checkout : new Date('15-Nov-2021')
      //   },
      // ]
    }

    ngAfterViewInit(): void {
        // this.headerComp.xtitle = "Mystring"

        // this.headerChildren.forEach((e)=>{
        //     // e.xtitle = "inside header chlidren"
        // })

    }

    ngAfterViewChecked(): void {
        // this.headerComp.xtitle = "after"
    }

    ngDoCheck(): void {
        console.log("on changes is called !")
    }


    

   

    title = "in parent";

    title_to_header = "from parent"


    roomSelected! : List

    hotelName : string = "Sri Krishna";
    roms : number = 100;
    hide = true;

    deci = 10.44564564444;


    myfunc() {
      if(this.hide){
        this.hide = false;
        this.title = "changed in parent"
      }else{
        this.hide = true;
        this.title = "changed once again"
      }

    }


    rooms : Room = {
      available : 10,
      total : 20,
      booked : 10

    }

    selectRoom(room : List){
      this.roomSelected = room;
      
    }

    addRoom(){
      const room : List = {
        roomNumber : '333',
        roomType : "Deluxe",
        amenities : "AC,fridge, kala katta",
        price : 500,
        photos : "url",
        checkinTime : new Date('11-Nov-2021'),
        checkoutTime : new Date('15-Nov-2021')
      };


      // this.roomlist.push(room);

      //  the above data will modify the roomlist hence instead of that create a new object of room list every time you want to push 

      // this can be achived using below approach 

      // this.roomlist = [...this.roomlist, room];

      this.roomsService.addRoom(room).subscribe((data)=>{
        this.roomlist = data;
        //  here the data that is obtained fromt the stream is the complete room list so you dont need to add...
        // in practicallity we need to append the data to the room list
      })


    }



    editRoom(){
      const room : List = {
        roomNumber : '3',
        roomType : "Updated Room",
        amenities : "AC,fridge, kala katta",
        price : 500,
        photos : "url",
        checkinTime : new Date('11-Nov-2021'),
        checkoutTime : new Date('15-Nov-2021')
      };


      this.roomsService.editRoom(room).subscribe((data)=>{
        this.roomlist = data;
      });

    }

    deleteRoom(){

      this.roomsService.deleteRoom('3').subscribe((data)=>{
        this.roomlist = data;
      })
    }



  
    
}
