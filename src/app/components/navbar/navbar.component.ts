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
  faSearch  = faSearch;
  faUser= faUser;
  search:any;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.search="";
  }
 
  openNav():void{
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  closeNav():void{
    document.getElementById("mySidebar").style.width = "0";
  }

  searchProducts():void{
    this.router.navigate(['/productdetails', this.search])
    this.search="";
  }

  homeLink(){
    this.router.navigate(['/home'] );
  }

}
