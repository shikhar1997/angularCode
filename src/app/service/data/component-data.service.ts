import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class ComponentDataService {
  
  private dataStringSource = new Subject<String>(); // try string instead of String. 
  dataString$ = this.dataStringSource.asObservable(); 

  //public componentName: String; 

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

  setNameData(name: String){
  //  this.componentName = name ; 
  //  this.dataStringSource.next(this.componentName);
  }

  sendComponentName(componentName: String){
   // console.log('componentName : ', componentName); 
    this.dataStringSource.next(componentName);
  }


}