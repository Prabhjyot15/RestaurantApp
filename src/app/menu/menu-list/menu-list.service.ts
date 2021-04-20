import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/model/menu-item.model';
@Injectable({
  providedIn: 'root'
})
export class MenuListService {
  private baseUrl = 'http://localhost:8080/'; 
  constructor(private http: HttpClient) { }

  fetchItems() : Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}
