import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ComponentDataService {
  constructor(private http:HttpClient) {  
  }

  getNumberOfComponentsService() {
  //  console.log( this.http.get<number>("http://localhost:8080/ValidCategories.csv/number") ); 
    return this.http.get<number>("http://localhost:8080/ValidCategories.csv/number") ; 
  }

   searchByNameService(name:String) {
     return this.http.get<String>("http://localhost:8080/ValidCategories.csv/search/" + name); 
   }

  getAvailableItemsService() {
    return this.http.get<String>("http://localhost:8080/ValidCategories.csv/availableItems");
  }

}