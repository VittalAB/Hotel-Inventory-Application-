import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {


  id!: number;
  // id$! : Observable<number>;

  // id$ = this.router.params.pipe(
  //   map(p => p['roomNumber'])
  // )
  id$ = this.router.paramMap.pipe(
    map(p => p.get('roomNumber'))
  )

  //


  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {

    // this.id=this.router.snapshot.params['roomNumber'];

    // this.router.paramMap.subscribe((p)=> p.get('roomNumber'));

    // this.router.params.subscribe((param)=>{
    //   console.log(param['roomNumber']);
    //   this.id = param['roomNumber'];
    // })
  }
}


