import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './components/categories/categories.component';
import { NewarrivalComponent } from './components/newarrival/newarrival.component';
import { ImagesComponent } from './components/images/images.component';
import { PopularproductsComponent } from './components/popularproducts/popularproducts.component';
import { FooterComponent } from './components/footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    NewarrivalComponent,
    ImagesComponent,
    PopularproductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
