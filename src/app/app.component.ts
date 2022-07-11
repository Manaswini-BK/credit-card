import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'credit-card';
  ccForm = new FormGroup({
    nameOnCard : new FormControl('',[Validators.required, Validators.minLength(3)]),
    cardNum: new FormControl('',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new FormControl('',[Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    cvv : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3) ])
  })

  get nameOnCard(){
    return (<FormControl>this.ccForm.get('nameOnCard'));
  }

  get cardNum(){
    return (<FormControl>this.ccForm.get('cardNum'));
  }

  get expiration(){
    return (<FormControl>this.ccForm.get('expiration'));
  }

  get cvv(){
    return (<FormControl>this.ccForm.get('cvv'));
  }

  submit(){
    console.log("Form submitted")
  }
}
