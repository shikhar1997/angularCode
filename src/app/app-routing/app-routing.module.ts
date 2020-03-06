import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AvailableComponentsComponent } from '../available-components/available-components.component'; 
import { CountComponentComponent } from '../count-component/count-component.component';
import { SearchByNameComponentComponent } from '../search-by-name-component/search-by-name-component.component'; 
import { ItemsComponent } from '../items/items.component';
import { BuildComponent } from '../build/build.component'; 

const routes: Routes  = [

  {
    path: '',
    component: ItemsComponent
  },

  {
    path: 'available-components', 
    component: AvailableComponentsComponent
  },

  {
    path: 'count-component',
    component: CountComponentComponent
  },

  {
    path: 'search-by-name-component', 
    component: SearchByNameComponentComponent 
  },

  {
    path: 'build', 
    component: BuildComponent 
  }

] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { 
  
}
