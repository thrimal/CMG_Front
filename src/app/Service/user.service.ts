import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:8080/api/v1/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userType:string='';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(baseUrl);
  }

  get(id: any) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post<any>(baseUrl,data);
  }

  getUser(userName: string,password:any) {
    return this.http.get<any>(`${baseUrl}/${userName}/${password}`);
  }

  update(id: any, data: any) {
    return this.http.put<any>(`${baseUrl}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/?id=${id}`);
  }
}
