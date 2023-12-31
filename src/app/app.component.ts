import { AfterViewInit, Component, ViewChild, ViewContainerRef ,ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Optional,Inject} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import{LoggerService} from './logger.service'
import {localStorageToken} from './localstorage.token'
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  @Inject(localStorageToken)private localStorage:any,
  private configService:ConfigService,
  private router:Router,
  private initService:InitService){
    console.log(initService.config);
    

}
ngOnInit(): void {
  // this.router.events.subscribe((event)=>{
  //   console.log(event);
  // })
  this.router.events.pipe(filter((event)=> event instanceof NavigationStart)).subscribe(
    (event)=>{
      console.log("Navigation Started");
    }
  )

  this.router.events.pipe(filter((event)=> event instanceof NavigationEnd)).subscribe(
    (event)=>{
      console.log("Navigation Completed");
    }
  )
  this.loggerService?.log("AppComponent.ngOnInit()")
  // this.name.nativeElement.innerText="Hiton hotels";
  this.localStorage.setItem('name','Hilton Hotel')
}
  // ngAfterViewInit(){
  //   const componentFactory = this.resolver.resolveComponentFactory(RoomsComponent);

  //   const componentRef = this.vcr.createComponent(componentFactory)
  //   componentRef.instance.numberOfRooms=50;
  // }
}
