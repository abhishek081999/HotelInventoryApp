import { AfterViewInit, Component, ViewChild, ViewContainerRef ,ComponentFactoryResolver, ComponentRef, ElementRef, OnInit} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  title = 'hotelinventoryapp';
  role = 'Admin';
@ViewChild('name',{static:true}) name!:ElementRef;



ngOnInit(): void {
  this.name.nativeElement.innerText="Hiton hotels"
}
//   @ViewChild('user',{read:ViewContainerRef})vcr:ViewContainerRef;
// constructor(private resolver: ComponentFactoryResolver){

// }
  // ngAfterViewInit(){
  //   const componentFactory = this.resolver.resolveComponentFactory(RoomsComponent);

  //   const componentRef = this.vcr.createComponent(componentFactory)
  //   componentRef.instance.numberOfRooms=50;
  // }
}
