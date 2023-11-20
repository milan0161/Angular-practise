import { Component, EventEmitter, Output } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    firstname: new FormControl<string>("", 
    [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(50), 
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lastname: new FormControl<string>("", 
    [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(50), 
      Validators.pattern('^[a-zA-Z]+$')
    ]
      ),
    email: new FormControl<string>("", 
    [
      Validators.required, 
      Validators.email
    ]),
    phone_number: new FormControl<string>("", 
    [
      Validators.required, 
      Validators.minLength(6), 
      Validators.pattern('^\\+?\\d+$')
    ]),
    message: new FormControl<string>("", 
    [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(255)
    ])
  })

  @Output() opened = new EventEmitter<boolean>();

  closeModal(){
    this.opened.emit(false)
  }

  sendEmail(){
    if(this.contactForm.invalid){
      return
    }
    console.log(this.contactForm.value)
    console.log(this.contactForm.invalid)
  }

 
}
