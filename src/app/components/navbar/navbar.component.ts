import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Init variables for search and Font Awesome Icons
  faSearch  = faSearch;
  faUser= faUser;
  search:any;
  constructor( private router: Router) { }


  // restart the search on reload
  ngOnInit(): void {
    this.search="";
  }
 
  // Open side menu on mobile
  openNav():void{
    document.getElementById("mySidebar").style.width = "250px";
  }
    // Close side menu on mobile
  closeNav():void{
    document.getElementById("mySidebar").style.width = "0";
  }
  
  // Search product and go to next component
  searchProducts():void{
    this.router.navigate(['/productdetails', this.search])
    this.search="";
  }
 

  // go to home page
  homeLink(){
    this.router.navigate(['/home'] );
  }

}
