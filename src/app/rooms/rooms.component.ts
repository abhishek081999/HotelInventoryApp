import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import {RoomsService}from './Services/rooms.service'
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
  // roomService = new RoomsService()
  constructor(@SkipSelf()
 private roomsService:RoomsService
  ) {}
  
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
    this.roomList = this.roomsService.getRooms();
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
