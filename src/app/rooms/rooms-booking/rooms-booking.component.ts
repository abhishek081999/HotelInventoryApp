import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
id:number=0;
  // id$ =this.router.params.pipe(map(params=>params['roomid']));
   id$ =this.router.paramMap.pipe(map(params=>params.get('roomid')));

constructor(private router:ActivatedRoute) { }
 

   ngOnInit(): void {
    // this.id =this.router.snapshot.params.roomid
    //  this.router.params.subscribe((params)=>{console.log(params);  this.id= params['roomid']})
    // this.router.paramMap.subscribe((params)=>{console.log(params); params.get('roomid')})

// this.id$ = this.router.params.pipe(map(params=>params['roomid']))
  }

}
