import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../Services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {
room:RoomList ={
  roomType:"",
  amenities: "",
  price:0,
  photos:"",
  checkinTime:new Date(),
  checkoutTime:new Date(),
  rating:0,
}

sucessMessage:string='';
  constructor(private roomService:RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm:NgForm){
this.roomService.addRoom(this.room).subscribe((data)=>{
  console.log(data);
  this.sucessMessage ="Room Added Sucessfully";
  // roomsForm.reset()
  roomsForm.resetForm({
    roomType:"",
    amenities: "",
    price:0,
    photos:"",
    checkinTime:new Date(),
    checkoutTime:new Date(),
    rating:0,
  })
})

}
  }


