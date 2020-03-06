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
  public error: boolean; 

  constructor(private service:ComponentDataService) {  
    this.error = false; 
    this.components = [];  // important line.
  }

  ngOnInit(): void {
    this.service.getAvailableItemsService();

    this.subscriptions.add( this.service.getAvailableItemsService().subscribe(
      response => this.handleSuccessfulResponseList(response) ,
      error => this.handleErrorResponse(error)
    ) ) ; 
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();  
  }

  handleErrorResponse(error){
    if(error){
      this.error = true; 
    }
  }

  handleSuccessfulResponseList(response) {
    console.log('response is ', response); 
     
    response.forEach(element => {
      console.log('element ', element); 
      this.components.push(element) ; 
    });

  }

}