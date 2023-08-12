import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './Services/rooms.service';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { catchError ,map} from 'rxjs/operators';
import {ConfigService} from '../services/config.service'
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Lui visant';
  numberOfRooms = 10;
  hideRooms = true;
  title = 'Room List';
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;
  // @ViewChildren(HeaderComponent)headerChildrenComponent!:QueryList<HeaderComponent>
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] | null = [];
  selectedRoom!: RoomList;
  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });
  // roomService = new RoomsService()
  totalBytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>();//subject
  getError$ = this.error$.asObservable();
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )
  constructor(
    @SkipSelf()
    private roomsService: RoomsService,
    private configService:ConfigService
  ) {}
  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomsService.getPhotos().subscribe((event) => {
      // console.log(data);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
    this.stream.subscribe((data) => {
      console.log(data);
    });
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    // this.subscription =this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomsService.getRooms$.subscribe(rooms => {
    //   console.log(rooms);

    // this.roomList =rooms;
    // });
  }

  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    // this.headerComponent.title="RoomsView"
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.headerComponent);
    this.headerComponent.title = 'RoomsView';
    // this.headerChildrenComponent.last.title ="Last title"
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('onChanges is called');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber:'104',
      roomType: 'Room 2',
      amenities: 'Air conditioner ,Free WiFi, TV, Bathroom, Kitchen',
      price: 800,
      photos: 'https://unsplash.com/photos/rlwE8f8anOc',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 8.9,
    };
    // this.roomList.push(room);
    // this.roomList = [...this.roomList,room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Room 245',
      amenities: 'Air conditioner ,Free WiFi, TV, Bathroom, Kitchen',
      price: 800,
      photos: 'https://unsplash.com/photos/rlwE8f8anOc',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 8.9,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
