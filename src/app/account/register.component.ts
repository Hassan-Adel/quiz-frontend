import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from './account.service';
import { CustomValidatorService } from '../custom-validators';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form : any;
  constructor(private api : AccountService, private FB : FormBuilder, customValidaors : CustomValidatorService) {
      this.form = FB.group({
        email:['', [Validators.required, customValidaors.emailValid()]],
        password:['', Validators.required],
        confirmPassword:['', Validators.required]
      }
      ,{ validator: customValidaors.matchingFields('password', 'confirmPassword')}
      
      );
   }

   register(form){
    
    }
}