import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
pageName="Login";
home:string="Home";
about:string="About us";
contact:string="Contact us";
myfontColor ="nav-link text-danger";

quote1="Welcome";
quote2="Welcome";
quote3="Welcome";


showWelcomeMsg(quote:string){
  alert(quote)
  console.log("hi");

}

}
