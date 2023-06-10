import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Lui visant';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [
    {
      roomNumber:101,
      roomType: 'Delux Room',
      amenities: 'Air conditioner ,Free WiFi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/rlwE8f8anOc',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating:4.5,
    },
    {
      roomNumber:102,
      roomType: ' Semi Delux Room',
      amenities: 'Air conditioner ,Free WiFi, TV, Bathroom, Kitchen',
      price: 400,
      photos: 'https://unsplash.com/photos/rlwE8f8anOc',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating:6.4,

    },
    {
      roomNumber:103,
      roomType: 'Room',
      amenities: 'Air conditioner ,Free WiFi, TV, Bathroom, Kitchen',
      price: 300,
      photos: 'https://unsplash.com/photos/rlwE8f8anOc',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating:7,

    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
