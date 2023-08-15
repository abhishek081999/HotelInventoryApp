import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BookingService} from './booking.service'
import { exhaustMap, mergeMap, switchMap } from 'rxjs/operators';
import {CustomValidator} from './validators/custom-validators'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
bookingForm! : FormGroup;


 get guests(){ 
   return this.bookingForm.get('guests') as FormArray  
   }

  constructor(private configService:ConfigService,private fb: FormBuilder,
    private bookingService:BookingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
const roomId = this.route.snapshot.paramMap.get('roomid')
    this.bookingForm= this.fb.group({
      roomId: new FormControl({value:roomId,disabled:true},{validators:[Validators.required]}),
      guestEmail: ['',{updateOn:'blur',validators:[Validators.required,Validators.email]}],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['',{updateOn:'blur',validators:[Validators.required,Validators.email]}],
      guestName: ['',[Validators.required,Validators.minLength(8),CustomValidator.ValidateName,CustomValidator.ValidateSpecialChar('*')]],
      address: this.fb.group({
        addressLine1: ['',[Validators.required]],
        addressLine2: [''],
        city: ['',{validators:[Validators.required]}],
        state:['',{validators:[Validators.required]}],
        country: [''],
        zipCode:[''],
      }),
     guests: this.fb.array([this.addGuestControl()]),
     tnc:new FormControl(false,{validators:[Validators.requiredTrue]})
      // guestCount:[''],
      // guestList: []
    },
    {updateOn:'blur',validators:[CustomValidator.validatedate]}
    )

    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data)=>{
    //   // console.log(data);
    //    this.bookingService.bookRoom(data).subscribe((data)=>{
    //   });
    // })
    // this.bookingForm.valueChanges.pipe(
    //     mergeMap((data)=> this.bookingService.bookRoom(data)) //subscribe to stream as soon as data is provided sequence doesn't matter
    //   ).subscribe((data)=>{
    //     console.log(data);
        
    //   })

    // this.bookingForm.valueChanges.pipe(
    //   switchMap((data)=> this.bookingService.bookRoom(data)) //it cancel the any existing request if it recieve / retreve new data
    // ).subscribe((data)=>{
    //   console.log(data);
      
    // })

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data)=> this.bookingService.bookRoom(data)) //it care about the sequence unless and until previous req is not completed it will not subscribe to any latest changes 
    ).subscribe((data)=>{
      console.log(data);
      
    })
  }

  addBooking(){
    console.log(this.bookingForm.value);
    console.log(this.bookingForm.getRawValue);
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{
    //   console.log(data);
      
    // });
this.bookingForm.reset({
  roomId: '2',
  guestEmail: '',
  checkinDate: '',
  checkoutDate: '',
  bookingStatus: '',
  bookingAmount: '',
  bookingDate: '',
  mobileNumber: '',
  guestName: '',
  address: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state:'',
    country: '',
    zipCode:'',
  },
 guests: [],
 tnc:false,

});

   
  }


  getBookingData(){
    // this.bookingForm.setValue({
      this.bookingForm.patchValue({
     
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('13-Aug-2023'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state:'',
        country: '',
        zipCode:'',
      },
     guests: [],
     tnc:false,
    })
  }

  addGuest(){
this.guests.push(
 this.addGuestControl()
)
  }
addGuestControl(){
  return this.fb.group({guestName:['',{validators:[Validators.required]}],age:new FormControl('') })
}

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''))
  }
  removePassport(){
    if(this.bookingForm.get('passport')){
this.bookingForm.removeControl('passport')
    }
  }


  removeGuest(index:number){
    this.guests.removeAt(index);

  }
}

// export class Booking {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: []
// }