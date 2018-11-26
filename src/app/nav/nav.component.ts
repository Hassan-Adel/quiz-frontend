import { Component } from '@angular/core';
import { AuthenticationService } from './../account/authentication.service'

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  
  constructor(private authApi : AuthenticationService) {
    }

  logout(){
    this.authApi.logout();
  }  

}
