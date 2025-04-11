import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  downloadResume(){
    const link = document.getElementById("resume") as HTMLAnchorElement;
    link.download = "Manisha_Gupta_Resume.pdf";
  }
}
