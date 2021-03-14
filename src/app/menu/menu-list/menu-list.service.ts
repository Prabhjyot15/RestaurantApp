import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/model/menu-item.model';
@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(private http: HttpClient) { }

  fetchItems() : Observable<any>{
    return this.http.get('assets/menu-list.json')
  }
}
