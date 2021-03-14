import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
@Input() item: MenuItem;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
