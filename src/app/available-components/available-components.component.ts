import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from '../service/data/component-data.service';
import { Subscription } from 'rxjs';
import { ComputerComponent } from '../classes/ComputerComponent'; 
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-available-components',
  templateUrl: './available-components.component.html',
  styleUrls: ['./available-components.component.css']
})
export class AvailableComponentsComponent implements OnInit {
  
  private subscriptions = new Subscription(); 
  public message: String; 
  public components: ComputerComponent[];

  constructor(private service:ComponentDataService) {  
    this.components = [];  // important line.
  }

  ngOnInit(): void {
    this.service.getAvailableItemsService();

    this.subscriptions.add( this.service.getAvailableItemsService().subscribe(
      response => this.handleSuccessfulResponseList(response) 
    ) ) ; 
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();  
  }

  handleSuccessfulResponseList(response) {
    console.log('response is ', response); 
     
    response.forEach(element => {
      console.log('element ', element); 
      this.components.push(element) ; 
    });

  }

}