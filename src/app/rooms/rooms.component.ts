import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked {
  hotelName = 'Lui visant';
  numberOfRooms = 10;
  hideRooms = false;
  title='Room List';
  @ViewChild(HeaderComponent,{static:true}) headerComponent!:HeaderComponent;
  // @ViewChildren(HeaderComponent)headerChildrenComponent!:QueryList<HeaderComponent>
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];
  selectedRoom!:RoomList;
  constructor() {}
  
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    // this.headerComponent.title="RoomsView"

  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  // console.log(this.headerComponent);
   this.headerComponent.title="RoomsView"
  // this.headerChildrenComponent.last.title ="Last title"
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log("onChanges is called");
    
  }

  ngOnInit(): void {
    console.log(this.headerComponent)
    this.roomList=[
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
  }

 

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title ="Rooms List"
  }
  selectRoom(room:RoomList){
    console.log(room)
this.selectedRoom=room;
  }

  addRoom(){
    const room :RoomList={
      roomNumber:104,
      roomType: 'Room 2',
      amenities: 'Air conditioner ,Free WiFi, TV, Bathroom, Kitchen',
      price: 800,
      photos: 'https://unsplash.com/photos/rlwE8f8anOc',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating:8,
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList,room];
  }
}
