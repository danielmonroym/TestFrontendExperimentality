import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PopularproductsService {
   // API URL
  URL= 'https://api.mercadolibre.com/sites/MCO/search?q=';
  constructor( private http: HttpClient) {

   }
      // get products in Ropa y accesorios category with a limit of 4 results for web view
   getPopularProducts(query): Observable<any> {
    console.log(`${this.URL}`+`${query}&category=MCO1430&limit=4`);
    return this.http.get(`${this.URL}`+`${query}&category=MCO1430&limit=4`);

  }
        // get products in Ropa y accesorios category with a limit of 1 result for mobile view
  getPopularProductsMobile(query): Observable<any> {
    console.log(`${this.URL}`+`${query}&category=MCO1430&limit=1`);
    return this.http.get(`${this.URL}`+`${query}&category=MCO1430&limit=1`);

  }

  
}
