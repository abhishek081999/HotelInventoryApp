import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';

import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
// import (environment) from '../../../environments/environment';
import { shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root', //root any(routing)  platform
})
export class RoomsService {
  roomList: RoomList[] = [];
  // getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1)); //here $ is stream
//  headers = new HttpHeaders({'token':'123fdgfd445'})

  //  getRooms$ = this.http.get<RoomList[]>('/api/rooms',{headers:this.headers,}).pipe(shareReplay(1)); //here $ is stream
   getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1)); //here $ is stream

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('Room service Initialized...');
    // console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint);
  }

  getRooms() {
    // const headers = new HttpHeaders({'token':'123fdgfd445'})
    // return this.http.get<RoomList[]>('/api/rooms');
    return this.http.get<RoomList[]>('/api/rooms',);

  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room,{
      // headers:this.headers,
    });
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
