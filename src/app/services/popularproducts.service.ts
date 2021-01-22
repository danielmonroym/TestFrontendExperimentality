import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PopularproductsService {
  URL= 'https://api.mercadolibre.com/sites/MCO/search?q=';
  constructor( private http: HttpClient) {

   }
   getPopularProducts(query): Observable<any> {
    console.log(`${this.URL}`+`${query}&category=MCO1430&limit=4`);
    return this.http.get(`${this.URL}`+`${query}&category=MCO1430&limit=4`);

  }
  getPopularProductsMobile(query): Observable<any> {
    console.log(`${this.URL}`+`${query}&category=MCO1430&limit=1`);
    return this.http.get(`${this.URL}`+`${query}&category=MCO1430&limit=1`);

  }

  
}
