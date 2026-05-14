import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  toggleList(id:string){
      console.log("toggled");
      var content = document.getElementById(id)!;
      if (content.style.display == "block") {
        content.style.display = "none";
      }
      else {  
        content.style.display = "block";
      }
  }

  
  toggleEdu(id:string){
    console.log("toggled");
    var content = document.getElementById(id)!;
    if (content.style.display == "block") {
      content.style.display = "none";
    }
    else {  
      content.style.display = "block";
    }
}

}
