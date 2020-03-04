import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from '../service/data/component-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-count-component',
  templateUrl: './count-component.component.html',
  styleUrls: ['./count-component.component.css']
})
export class CountComponentComponent implements OnInit {

  private subscriptions = new Subscription(); 
  public num : number ; 

  constructor(private service:ComponentDataService) { }

  ngOnInit(): void {
    
    this.service.getNumberOfComponentsService(); 

    this.subscriptions.add(  this.service.getNumberOfComponentsService().subscribe(
      response => this.handleSuccessfulResponse(response )
    )
  );

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); 
  }

  handleSuccessfulResponse(response) { // if a successful response comes back, then do this. 
    this.num = response.valueOf(); // 4  
  }

}
