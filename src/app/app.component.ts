import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private router: Router) { }

  ngOnInit() {
       

  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  
}
