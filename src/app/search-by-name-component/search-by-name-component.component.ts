import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ComponentDataService } from '../service/data/component-data.service';
import { Subscription } from 'rxjs';
import { ComputerComponent } from '../classes/ComputerComponent';

@Component({
  selector: 'app-search-by-name-component',
  templateUrl: './search-by-name-component.component.html',
  styleUrls: ['./search-by-name-component.component.css']
})
export class SearchByNameComponentComponent implements OnInit {
 
  private subscriptions = new Subscription(); 
  public componentName:String; 
  public responseString: String;  
  public searchResult: ComputerComponent[]; 

  constructor(private service:ComponentDataService) { 
    this.searchResult = [] ; 
  }

  ngOnInit(): void { 

    this.service.dataString$.subscribe(
      data => {

        console.log('data is : ', data); 
        this.componentName = data;
        console.log('this.componentName ', this.componentName); 

        this.service.searchByNameService(this.componentName) ; 

        this.subscriptions.add( this.service.searchByNameService(this.componentName).subscribe(
          response => this.handleSuccessfulResponseName(response) 
        ) ) ;  

      }
    );

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); 
  }

  handleSuccessfulResponseName(response) {

    this.searchResult = [] ; 

    this.responseString = JSON.stringify(response) ; 
    console.log('response String is ', this.responseString); 

    response.forEach(element => {
      console.log('element ', element); 
      this.searchResult.push(element) ; 
    });

  }

}