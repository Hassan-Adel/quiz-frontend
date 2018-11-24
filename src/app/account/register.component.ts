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
        email:['', [Validators.required, emailValid()]],
        password:['', Validators.required],
        confirmPassword:['', Validators.required]
      }
      ,{ validator: matchingFields('password', 'confirmPassword')}
      
      );
   }

   register(form){
    
    }
}

//make the function outside of the class since there are good odds we will need to extract it into its own file in the future. 
/**
 *  Validators need to return a function that will either return no errors if it passes or if it's invalid, it will return an errors object. 
 */
function matchingFields(field1: any, field2: any){
  return (form: any) => {
      if (form.controls[field1].value !== form.controls[field2].value){
          return { mismatchedFields: true }
      }
  }
}
// Search for email regex (regular expression)
function emailValid() {
  return (control: any) => {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return regex.test(control.value) ? null : { invalidEmail: true }
  }
}
