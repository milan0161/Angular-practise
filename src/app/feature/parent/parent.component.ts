import { Component } from '@angular/core';
import { Item } from '../types/index.types';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  items: Item[] = ['Learn Angular', 'Become better than you were yesterday'];

  addItem(itemForm: NgForm) {
    if (itemForm.invalid) {
      return;
    }

    this.items = [...this.items, itemForm.value.item];

    itemForm.reset();
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    // const filteredItems = [...this.items].filter((x) => x !== item);
    // this.items = filteredItems;
  }
}
