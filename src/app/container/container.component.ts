import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/Services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  //  providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit {

  @ContentChild(EmployeeComponent)employee !:EmployeeComponent
  // constructor(@Host()private roomsService:RoomsService) { }
  constructor() { }
  ngAfterContentInit(): void {
console.log(this.employee);
this.employee.empName = "Bahadur";
  }

  ngOnInit(): void {
  }

}
