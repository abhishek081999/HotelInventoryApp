import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
// import (environment) from '../../../environments/environment';

@Injectable({
  providedIn: 'root' //root any(routing)  platform
})
export class RoomsService {

  roomList:RoomList[]=[
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

  constructor(@Inject(APP_SERVICE_CONFIG)private config:AppConfig) { 
    console.log('Room service Initialized...');
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint)

  }

  getRooms(){
    return this.roomList;
  }
}

