import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() items: string[] = [];

  @Output() selectedItem = new EventEmitter<string>();

  selectItem(item: string) {
    this.selectedItem.emit(item);
  }
}
