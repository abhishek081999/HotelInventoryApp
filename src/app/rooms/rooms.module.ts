import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomsComponent} from '../rooms/rooms.component'
import { RoomsRoutingModule } from './rooms-routing.module';
import{RoomsListComponent} from '../rooms/rooms-list/rooms-list.component';
import {RoomsBookingComponent} from '../rooms/rooms-booking/rooms-booking.component';
import {RoomsAddComponent} from '../rooms/rooms-add/rooms-add.component'
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,

    RoomsAddComponent,],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ]
})
export class RoomsModule { }
