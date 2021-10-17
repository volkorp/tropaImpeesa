import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = true;
  scouter = false;
  contLogo = 0;
  title = 'tropaImpeesa';

  constructor(private router: Router) { }

  clicked(){
    this.contLogo++;
    if(this.contLogo >= 1)
      this.scouter=true;    
  }

  isScouter(){
    return this.scouter;
  }

  goScouterLand(){
    this.router.navigate(['/scouters'])
  }
}
