import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ListProductsService } from 'src/app/services/list-products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements  OnInit {
  search:any;
  products: Products[]= [];
  pagination:number = 0; 
  number:number=0;
  disableNext:boolean=false;
  disablePrev:boolean=true;
  constructor( private route: ActivatedRoute, private listProductsService:ListProductsService) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      this.search = params['search'];
      this.products=[];
      this.pagination=0;
      this.listProductsService.getProducts(this.search).subscribe((data) => {
        console.log(data);
        this.products = data.results;
      
    });
    }); 

    
   



  }
  getNextProducts():void{
    this.disablePrev=false;

    this.pagination=this.pagination+50;
    this.number=this.number+1;
    if (this.pagination == 1000) {
      this.disableNext = true;
    }
    this.route.params.subscribe(params =>{
      this.search = params['search'];
    this.listProductsService.getProductsOffset(this.search,this.pagination).subscribe((data) => {
      console.log(data);
      this.products = data.results;
     
    });
  });

  

}

getPrevProducts():void{

  this.pagination=this.pagination-50;
  if (this.pagination< 1000) {
    this.disableNext = false;
  }
  this.number= this.number - 1;

  if (this.number == 0) {
    this.disablePrev = true;
  }
  this.route.params.subscribe(params =>{
    this.search = params['search'];
  this.listProductsService.getProductsOffset(this.search,this.pagination).subscribe((data) => {
    console.log(data);
    this.products = data.results;

  });
});
}
}