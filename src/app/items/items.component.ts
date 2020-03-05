import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'; 
import { ComponentDataService } from '../service/data/component-data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public componentName: String; 

  constructor(  private service: ComponentDataService, public router: Router) { 
  }

  ngOnInit(): void {
  }

  setComponentName(event: Event) {
    this.componentName = (<HTMLInputElement>event.target).value;
    console.log('component name is ', this.componentName); 
    this.service.sendComponentName(this.componentName); 
  }


}