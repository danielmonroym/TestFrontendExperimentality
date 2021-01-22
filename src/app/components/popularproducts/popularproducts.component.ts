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
  //init products arrays
  products: Products[]= [];
  productsMobile: Products[]= [];

  // random searchs for most popular products cards
  randomSearchRight:any=["camisa","zapatos","boxer","pantalon", "gorra", "medias"];
  randomSearchLeft:any=["camisilla","chanclas","pantaloneta","sudadera", "chaqueta", "sweater"];

  // Font awesome variables
 
  faArrowLeft=faArrowLeft;
  faArrowRight=faArrowRight; 

  // Variables for control
  random:number=0;
  searchPrev:any="";
  search:any="buzo";
  
  
  constructor( private productService: PopularproductsService) { 

  }


// Reset variables on refresh or entering the page
  ngOnInit(): void {
    this.products=[];
    this.productsMobile=[];
    this.getProducts();
   this.getProductsMobile();
  }

  // get data for popular products
  getProducts():void{
    console.log(this.search);
    this.productService.getPopularProducts(this.search).subscribe((data) => {
      console.log(data);
      this.products = data.results;
  
  });
}
   // get data for popular products in mobile view
getProductsMobile():void{
  console.log(this.search);
  this.productService.getPopularProductsMobile(this.search).subscribe((data) => {
    console.log(data);
    this.productsMobile = data.results;

});
}
// get random number to match array searching index
getRandomArbitrary(min, max):number {
  return Math.round(Math.random() * (max - min) + min);
}

// get random products for web view
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
// get random products for web view
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
// get random products for mobile view
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
// get random products for mobile view
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
