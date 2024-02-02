import { Inject, Injectable } from '@angular/core';
import { List } from '../rooms';
import { APP_SERVICE } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, find, map, shareReplay } from 'rxjs';
// import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  // roomList: List[] = [
  //   {
  //     rooomType: "Deluxe",
  //     amenities: "AC,fridge, kala katta",
  //     price: 500,
  //     image: "url",
  //     checkin: new Date('11-Nov-2021'),
  //     checkout: new Date('15-Nov-2021')
  //   },
  //   {
  //     rooomType: "Deluxe1",
  //     amenities: "AC,fridge",
  //     price: 5040,
  //     image: "url",
  //     checkin: new Date('11-Nov-2021'),
  //     checkout: new Date('15-Nov-2021')
  //   },
  //   {
  //     rooomType: "Deluxe2",
  //     amenities: "AC,fridge",
  //     price: 5001,
  //     image: "url",
  //     checkin: new Date('11-Nov-2021'),
  //     checkout: new Date('15-Nov-2021')
  //   },
  //   {
  //     rooomType: "Deluxe3",
  //     amenities: "AC,fridge",
  //     price: 5000,
  //     image: "url",
  //     checkin: new Date('11-Nov-2021'),
  //     checkout: new Date('15-Nov-2021')
  //   },
  // ]

  roomList : List[] = [];


 // this pipe will cache the return data so that multiple api calls for the same data is not made

  header = new HttpHeaders({"token" : "vittabl @ 123"})


  getRooms$ =  this.http.get<List[]>('/api/rooms', {
    // headers : this.header
  }).pipe(
        shareReplay(1)
  );


 



  constructor(@Inject(APP_SERVICE) private config : AppConfig, 
  private http : HttpClient) {
    console.log('Rooms service initialized ...');
    // console.log(environment.apiEndpoint);

      console.log(this.config.apiEndpoint);
  }



  //get call

  getRooms() {
    // return this.roomList;

    const header = new HttpHeaders({"token" : "123456@vab"})

    return this.http.get<List[]>('/api/rooms', {  // for each request if you want to make send the header create the Http intereceptors
      headers:header
    });
  }


  // post call 

  addRoom(room : List){
    return this.http.post<List[]>('/api/rooms', room);
  }


  // put call update the data
  editRoom(room : List){
    return this.http.put<List[]>(`/api/rooms/${room.roomNumber}`, room);

  }


  deleteRoom(id : string){
    return this.http.delete<List[]>(
      `/api/rooms/${id}`
    );

    // here delete api returns List[] array typically we dont return in delete calls

    
  }


  getPhotos(){
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos', {
      reportProgress : true,

    });
    return this.http.request(request);

  }


}
