import { AfterViewInit,Inject , Component, ElementRef, OnInit, ViewChild, ViewContainerRef, Optional } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import {LocalStoragetoken} from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from 'src/services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'admin';

  constructor( @Optional() private log : LoggerService,
  @Inject(LocalStoragetoken) private localstorage : Storage, private init : InitService, private configs : ConfigService, private router : Router){
    this.log?.log();
    
    console.log(this.init.init);


    // this.router.events.subscribe((eve)=>console.log(eve));

    this.router.events.pipe(filter((eve)=>eve instanceof NavigationStart)).subscribe((eve)=>console.log("Navigation started show loader"));

    this.router.events.pipe(filter((eve)=>eve instanceof NavigationEnd)).subscribe((eve)=>console.log("Stop loader "));

     


    this.localstorage.setItem("Name" ,"Vittal Badami");
    // here localstorage is the factory provider

  // window.alert("Error");
  // window.prompt("Enter thy name");
  // window.confirm("cofirm taht you are indian ")

    // fetch(?
  }


  
  
  // create the component dynamically 
  @ViewChild('name', {static:true}) name!: ElementRef;


  ngOnInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    this.name.nativeElement.innerText = "My innertext this is coming form the view child";
  }
  
  // @ViewChild('user', {read : ViewContainerRef}) vcr!:ViewContainerRef;
  //   ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.roms = 555;
  // }




}



