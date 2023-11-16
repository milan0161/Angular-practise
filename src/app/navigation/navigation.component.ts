import { Component } from '@angular/core';
import { NavigationItem } from './types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  items: NavigationItem[] = [
    {path: '', displayName: 'Home'},
    {path: '/contact', displayName: 'Contact'},
    {path: '/about', displayName: 'About'},
  ]
}
