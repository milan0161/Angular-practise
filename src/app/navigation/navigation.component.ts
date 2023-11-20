import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from '../app-routing.module';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  items: Route[] = []
  ngOnInit(): void {
    this.items = routes
  }
  
}
