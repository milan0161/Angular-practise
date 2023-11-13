import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../types/index.types';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() items: Item[] = [];

  @Output() selectedItem = new EventEmitter<Item>();

  constructor() {}

  selectItem(item: Item) {
    this.selectedItem.emit(item);
  }
}
