import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from './account.service';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form : any;
  constructor(private api : AccountService, private FB : FormBuilder) {
      this.form = FB.group({
        email:['', Validators.required],
        password:['', Validators.required]
      });
   }

   register(form){
    
    }
}
