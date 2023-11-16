import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  //Nemoj da pravis sinonime bez dodane funkcije!
  items: string[] = ['Learn Angular', 'Become better than you were yesterday'];

  addItem(itemForm: NgForm) {
    if (itemForm.invalid) {
      return;
    }

    this.items = [...this.items, itemForm.value.item];

    itemForm.reset();
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    // Ne ostavlja se komentarisan kod!
  }
}
