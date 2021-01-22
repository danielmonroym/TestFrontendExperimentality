
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


// file with all the app routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'productdetails/:search',  component: ProductDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  
  
];