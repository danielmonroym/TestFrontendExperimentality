import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
 
  openNav():void{
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  closeNav():void{
    document.getElementById("mySidebar").style.width = "0";
  }
}
