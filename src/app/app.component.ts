import { AfterViewInit, Component, ViewChild, ViewContainerRef ,ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Optional,Inject} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import{LoggerService} from './logger.service'
import {localStorageToken} from './localstorage.token'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  title = 'hotelinventoryapp';
  role = 'Admin';
@ViewChild('name',{static:true}) name!:ElementRef;




//   @ViewChild('user',{read:ViewContainerRef})vcr:ViewContainerRef;
 constructor(private resolver: ComponentFactoryResolver,
  @Optional() private loggerService:LoggerService,
  @Inject(localStorageToken)private localStorage:Storage){

}
ngOnInit(): void {
  this.loggerService?.log("AppComponent.ngOnInit()")
  this.name.nativeElement.innerText="Hiton hotels"
  this.localStorage.setItem('name','Hilton Hotel')
}
  // ngAfterViewInit(){
  //   const componentFactory = this.resolver.resolveComponentFactory(RoomsComponent);

  //   const componentRef = this.vcr.createComponent(componentFactory)
  //   componentRef.instance.numberOfRooms=50;
  // }
}
