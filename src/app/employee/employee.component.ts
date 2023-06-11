import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/Services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers:[RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName:string ='John';

  // constructor(@Self() private roomsService:RoomsService) { }//self sure service shoube be there we throw exception
  constructor( private roomsService:RoomsService) { }//self sure service shoube be there we throw exception

  ngOnInit(): void {
  }

}
