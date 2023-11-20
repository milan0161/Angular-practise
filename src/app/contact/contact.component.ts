import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  isOpen:boolean = false

  sendContactInfo(){
    this.isOpen = true

  }
  
  closeModal(opt: boolean){
    this.isOpen = opt;
    console.log(this.isOpen)
  }
}
