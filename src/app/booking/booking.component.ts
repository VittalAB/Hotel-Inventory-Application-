import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ConfigService } from 'src/services/config.service';
import { BookingService } from './booking.service';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  ngOnInit(): void {
      // this.getBookingData();

      // it is tr9iggered for each key press ... so to avoid this use updateOn blur

      // this.bookingForm.valueChanges.subscribe((data)=>{
      //   // console.log(data['guestName']);
      //   this.bs.bookRoom(data).subscribe((data)=>{

      //   })
      // })


      this.bookingForm.valueChanges.pipe(
        mergeMap((d)=> this.bs.bookRoom(d))
      ).subscribe((d)=> console.log(d))
  }


  bookingForm !: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  // gArray = this.bookingForm.get('guests') as FormArray;


  constructor(private condig: ConfigService, private fb: FormBuilder, private bs : BookingService) {

    this.bookingForm = this.fb.group({
      bookingId: new FormControl({ value: 2, disabled: true }, {validators: [Validators.required]}),
      roomId: new FormControl({ value: 666, disabled: true }, {validators: [Validators.required]}),
      guestEmail: ['', {updateOn:"blur", validators : [Validators.required, Validators.email]}],
      checkinDate: ['', [Validators.required]],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: ['', [Validators.required]],
      bookingNumber: [''],
      mobileNumber: ['', ],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({   // form within the form
        guestAddress: ['', [Validators.required]],
        guestCity: [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: ['',[Validators.maxLength(6)]],
      }),
      guests: this.fb.array(
        [
          
          this.fb.group({guestName: [''], age: ['']})
      
      ]),
      guestList: []
    },{
      updateOn:"change" // this will give once the form is updated with the values 
    })





  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bs.bookRoom(this.bookingForm.getRawValue()).subscribe((d)=>{
      console.log("Post request is being made");
      console.log(d);

    })
    // this.bookingForm.reset();
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: [''] })
    );

  }

  addPassport() {
    this.bookingForm.addControl("Passport", new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('Passport')) {
      this.bookingForm.removeControl("Passport");
    } else {
      console.log("Passport field not found ...")
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }


  getBookingData(){
    this.bookingForm.patchValue({
      bookingId:"1",
      roomId: "2",
      guestEmail: 'a@a.com ',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      bookingStatus: "ads",
      bookingAmount: "asd",
      bookingNumber: "aa",
      mobileNumber: "asd",
      guestName: "asd",
      address: this.fb.group({   // form within the form
        guestAddress: "asd",
        guestCity: "asd",
        guestState: "asd",
        guestCountry: "asd",
        guestZipCode:"asd",
      }),
      guests: this.fb.array(
        [
          
          
      
      ]),
      guestList: []
    })
  }




}

