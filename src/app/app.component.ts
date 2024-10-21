import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
  
  constructor(private router: Router) {

  }

  @ViewChild(NavbarComponent)
  barComponent!: NavbarComponent;
  //barComponent: NavbarComponent = new NavbarComponent;
}
