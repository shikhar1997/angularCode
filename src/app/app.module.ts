import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AvailableComponentsComponent } from './available-components/available-components.component';
import { SearchByNameComponentComponent } from './search-by-name-component/search-by-name-component.component';
import { CountComponentComponent } from './count-component/count-component.component';
import { ItemsComponent } from './items/items.component'

@NgModule({
  declarations: [
    AppComponent,
    AvailableComponentsComponent,
    SearchByNameComponentComponent,
    CountComponentComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
