import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  addNewAdmin(adminData: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.url + "/newAdmin", adminData);
  }
}
