import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from '../service/data/component-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-by-name-component',
  templateUrl: './search-by-name-component.component.html',
  styleUrls: ['./search-by-name-component.component.css']
})
export class SearchByNameComponentComponent implements OnInit {
 
  private subscriptions = new Subscription(); 
  public componentName:String; 
  public responseString: String; 

  constructor(private service:ComponentDataService) { 
    this.componentName = "Atom Processor C3708";
  }

  ngOnInit(): void {
    this.service.searchByNameService(this.componentName) ; 

    this.subscriptions.add( this.service.searchByNameService(this.componentName).subscribe(
      response => this.handleSuccessfulResponseName(response) 
    ) ) ; 
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); 
  }

  handleSuccessfulResponseName(response) {
    this.responseString = JSON.stringify(response) ; 
    console.log('response String is ', this.responseString); 
  }

}
