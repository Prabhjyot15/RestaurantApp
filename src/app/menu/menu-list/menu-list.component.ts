import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.model';
import { MenuListService } from './menu-list.service';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
menuList: MenuItem[]=[]
  constructor(private menuService: MenuListService) { }

  ngOnInit(): void {
   this.menuService.fetchItems().subscribe((response)=>{
      this.menuList = response;
      console.log(this.menuList);
    });

  
  }

}
