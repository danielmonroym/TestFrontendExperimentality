import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { PopularproductsService } from 'src/app/services/popularproducts.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popularproducts',
  templateUrl: './popularproducts.component.html',
  styleUrls: ['./popularproducts.component.css']
})
export class PopularproductsComponent implements OnInit {
  products: Products[]= [];
  productsMobile: Products[]= [];
  randomSearchRight:any=["camisa","zapatos","boxer","pantalon", "gorra", "medias"];
  randomSearchLeft:any=["camisilla","chanclas","pantaloneta","sudadera", "chaqueta", "sweater"];
  img: any[]=[];
  faArrowLeft=faArrowLeft;
  faArrowRight=faArrowRight; 
  random:number=0;
  searchPrev:any="";
  search:any="buzo";
  
  
  constructor( private productService: PopularproductsService) { 

  }



  ngOnInit(): void {
    this.products=[];
    this.productsMobile=[];
    this.getProducts();
   this.getProductsMobile();
  }

  getProducts():void{
    console.log(this.search);
    this.productService.getPopularProducts(this.search).subscribe((data) => {
      console.log(data);
      this.products = data.results;
  
  });
}

getProductsMobile():void{
  console.log(this.search);
  this.productService.getPopularProductsMobile(this.search).subscribe((data) => {
    console.log(data);
    this.productsMobile = data.results;

});
}
getRandomArbitrary(min, max):number {
  return Math.round(Math.random() * (max - min) + min);
}


getPrevProducts():void{
  this.random=this.getRandomArbitrary(0,5);
  console.log(this.random);
  this.search=this.randomSearchRight[this.random];
  console.log(this.search);
   this.productService.getPopularProducts(this.search).subscribe((data) => {
     console.log(data);
     this.products = data.results;
   
 
 });
}

getNextProducts():void{
  this.random=this.getRandomArbitrary(0,5);
  console.log(this.random);
  this.search=this.randomSearchLeft[this.random];
  console.log(this.search);
   this.productService.getPopularProducts(this.search).subscribe((data) => {
     console.log(data);
     this.products = data.results;
   
 
 });
 }

 getPrevProductsMobile():void{
  this.random=this.getRandomArbitrary(0,5);
  console.log(this.random);
  this.search=this.randomSearchRight[this.random];
  console.log(this.search);
   this.productService.getPopularProductsMobile(this.search).subscribe((data) => {
     console.log(data);
     this.productsMobile = data.results;
   
 
 });
}

getNextProductsMobile():void{
  this.random=this.getRandomArbitrary(0,5);
  console.log(this.random);
  this.search=this.randomSearchLeft[this.random];
  console.log(this.search);
   this.productService.getPopularProductsMobile(this.search).subscribe((data) => {
     console.log(data);
     this.productsMobile = data.results;
   
 
 });
 }

}
