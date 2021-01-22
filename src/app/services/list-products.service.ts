import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  URL= 'https://api.mercadolibre.com/sites/MCO/search?q=';
  constructor( private http: HttpClient) {

   }
   getProducts(query): Observable<any> {
    console.log(`${this.URL}`+`${query}&category=MCO1430`);
    return this.http.get(`${this.URL}`+`${query}&category=MCO1430`);

  }

  getProductsOffset(query, offset): Observable<any> {
    console.log(`${this.URL}`+`${query}&category=MCO1430`);
    return this.http.get(`${this.URL}`+`${query}&category=MCO1430&offset=${offset}`);

  }
  

}
