import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('userForm') signupForm!: NgForm;

  

  title = 'form-validation';

  genders = ['male', 'female']

  topics = ['Angular', 'React', 'vue']

  // onSubmit(userForm: NgForm){
  //   console.log(userForm);
    
  // }
  onSubmit(){
    console.log(this.signupForm);
    
  }
}
